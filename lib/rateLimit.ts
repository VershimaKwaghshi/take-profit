import { NextRequest } from "next/server";
import prisma from "./prisma";

export function getClientIp(req: NextRequest | Request): string {
  const headers = req.headers;
  const xff = headers.get("x-forwarded-for");
  if (xff) {
    return xff.split(",")[0].trim();
  }
  const realIp = headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }
  return "127.0.0.1";
}

export async function checkRateLimit(
  key: string,
  limit: number,
  windowMs: number
): Promise<{ success: boolean; remaining: number; resetAt: Date }> {
  const now = new Date();
  const existing = await prisma.rateLimitEntry.findUnique({ where: { key } });

  if (!existing || existing.resetAt <= now) {
    const resetAt = new Date(now.getTime() + windowMs);
    await prisma.rateLimitEntry.upsert({
      where: { key },
      update: { count: 1, resetAt },
      create: { key, count: 1, resetAt },
    });
    return { success: true, remaining: limit - 1, resetAt };
  }

  const updated = await prisma.rateLimitEntry.update({
    where: { key },
    data: { count: { increment: 1 } },
  });

  const success = updated.count <= limit;
  const remaining = Math.max(0, limit - updated.count);

  return { success, remaining, resetAt: existing.resetAt };
}

export const rateLimit = checkRateLimit;
