import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const lessons = [
  {
    lessonNumber: 1,
    title: "Trading Market",
    slug: "trading-market",
    description:
      "Understand what a trading market is and how participants interact within it.",
    markdownPath: "/lessons/trading-market.md",
    svgPath: "/illustrations/trading-market.svg",
    readingTime: 5,
  },
  {
    lessonNumber: 2,
    title: "Buyers & Sellers",
    slug: "buyers-sellers",
    description:
      "Understand buyers, sellers, and how their actions create market movement.",
    markdownPath: "/lessons/buyers-sellers.md",
    svgPath: "/illustrations/buyers-sellers.svg",
    readingTime: 4,
  },
  {
    lessonNumber: 3,
    title: "Broker",
    slug: "broker",
    description:
      "Understand the role of a broker and how orders reach the market.",
    markdownPath: "/lessons/broker.md",
    svgPath: "/illustrations/broker.svg",
    readingTime: 5,
  },
  {
    lessonNumber: 4,
    title: "Liquidity Provider",
    slug: "liquidity-provider",
    description:
      "Learn what liquidity providers do and why liquidity matters.",
    markdownPath: "/lessons/liquidity-provider.md",
    svgPath: "/illustrations/liquidity-provider.svg",
    readingTime: 4,
  },
  {
    lessonNumber: 5,
    title: "Order Flow",
    slug: "order-flow",
    description:
      "Understand how buying and selling orders flow through the market.",
    markdownPath: "/lessons/order-flow.md",
    svgPath: "/illustrations/order-flow.svg",
    readingTime: 5,
  },
  {
    lessonNumber: 6,
    title: "Regulation",
    slug: "regulation",
    description:
      "Understand the role of regulation in financial markets.",
    markdownPath: "/lessons/regulation.md",
    svgPath: "/illustrations/regulation.svg",
    readingTime: 4,
  },
  {
    lessonNumber: 7,
    title: "Prop Firm",
    slug: "prop-firm",
    description:
      "Understand how proprietary trading firms operate.",
    markdownPath: "/lessons/prop-firm.md",
    svgPath: "/illustrations/prop-firm.svg",
    readingTime: 5,
  },
  {
    lessonNumber: 8,
    title: "Restitution",
    slug: "restitution",
    description:
      "Understand restitution and how losses or disputes can be addressed.",
    markdownPath: "/lessons/restitution.md",
    svgPath: "/illustrations/restitution.svg",
    readingTime: 5,
  },
  {
    lessonNumber: 9,
    title: "Funded Capital",
    slug: "funded-capital",
    description:
      "Learn how funded trading capital works.",
    markdownPath: "/lessons/funded-capital.md",
    svgPath: "/illustrations/funded-capital.svg",
    readingTime: 6,
  },
  {
    lessonNumber: 10,
    title: "Manager Market",
    slug: "manager-market",
    description:
      "Understand the market for trading managers and capital allocation.",
    markdownPath: "/lessons/manager-market.md",
    svgPath: "/illustrations/manager-market.svg",
    readingTime: 6,
  },
  {
    lessonNumber: 11,
    title: "Referral Market",
    slug: "referral-market",
    description:
      "Understand how referrals connect participants within the platform.",
    markdownPath: "/lessons/referral-market.md",
    svgPath: "/illustrations/referral-market.svg",
    readingTime: 6,
  },
  {
    lessonNumber: 12,
    title: "Social Bond",
    slug: "social-bond",
    description:
      "Understand how relationships and trust can connect participants.",
    markdownPath: "/lessons/social-bond.md",
    svgPath: "/illustrations/social-bond.svg",
    readingTime: 7,
  },
];

const socialBonds = [
  {
    bondCode: "SB-NY-091",
    location: "NYC Solar Initiative",
    bondType: "Community Solar",
    targetReturnPct: 13.2,
    status: "eligible",
    minInvestment: 1000,
  },
  {
    bondCode: "SB-CA-112",
    location: "LA Water Treatment",
    bondType: "Clean Water infrastructure",
    targetReturnPct: 11.8,
    status: "funded",
    minInvestment: 1000,
  },
  {
    bondCode: "SB-CA-208",
    location: "CA Affordable Housing",
    bondType: "Multifamily Housing",
    targetReturnPct: 12.0,
    status: "funded",
    minInvestment: 1000,
  },
  {
    bondCode: "SB-TX-083",
    location: "Austin Green Space",
    bondType: "Public Parks",
    targetReturnPct: 12.8,
    status: "eligible",
    minInvestment: 1000,
  },
  {
    bondCode: "SB-FL-204",
    location: "Miami Education Tech",
    bondType: "Public Schools",
    targetReturnPct: 13.5,
    status: "pending_review",
    minInvestment: 1000,
  },
];

async function main() {
  for (const lesson of lessons) {
    await prisma.lesson.upsert({
      where: {
        lessonNumber: lesson.lessonNumber,
      },
      update: lesson,
      create: lesson,
    });
  }

  console.log("✅ 12 lessons seeded successfully.");

  for (const bond of socialBonds) {
    await prisma.socialBond.upsert({
      where: { bondCode: bond.bondCode },
      update: bond,
      create: bond,
    });
  }

  console.log("✅ 5 social bonds seeded successfully.");
}

main()
  .catch((error) => {
    console.error("❌ Seed failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
