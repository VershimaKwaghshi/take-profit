import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const lessons = [
    {
      lessonNumber: 1,
      title: "Trading Market",
      slug: "trading-market",
      markdownPath: "/lessons/trading-market.md",
      svgPath: "/illustrations/trading-market.svg",
      readingTime: 5,
    },
    {
      lessonNumber: 2,
      title: "Buyers & Sellers",
      slug: "buyers-sellers",
      markdownPath: "/lessons/buyers-sellers.md",
      svgPath: "/illustrations/buyers-sellers.svg",
      readingTime: 4,
    },
    {
      lessonNumber: 3,
      title: "Broker",
      slug: "broker",
      markdownPath: "/lessons/broker.md",
      svgPath: "/illustrations/broker.svg",
      readingTime: 5,
    },
    {
      lessonNumber: 4,
      title: "Liquidity Provider",
      slug: "liquidity-provider",
      markdownPath: "/lessons/liquidity-provider.md",
      svgPath: "/illustrations/liquidity-provider.svg",
      readingTime: 4,
    },
    {
      lessonNumber: 5,
      title: "Order Flow",
      slug: "order-flow",
      markdownPath: "/lessons/order-flow.md",
      svgPath: "/illustrations/order-flow.svg",
      readingTime: 5,
    },
    {
      lessonNumber: 6,
      title: "Regulation",
      slug: "regulation",
      markdownPath: "/lessons/regulation.md",
      svgPath: "/illustrations/regulation.svg",
      readingTime: 4,
    },
    {
      lessonNumber: 7,
      title: "Prop Firm",
      slug: "prop-firm",
      markdownPath: "/lessons/prop-firm.md",
      svgPath: "/illustrations/prop-firm.svg",
      readingTime: 5,
    },
    {
      lessonNumber: 8,
      title: "Restitution",
      slug: "restitution",
      markdownPath: "/lessons/restitution.md",
      svgPath: "/illustrations/restitution.svg",
      readingTime: 5,
    },
    {
      lessonNumber: 9,
      title: "Funded Capital",
      slug: "funded-capital",
      markdownPath: "/lessons/funded-capital.md",
      svgPath: "/illustrations/funded-capital.svg",
      readingTime: 6,
    },
    {
      lessonNumber: 10,
      title: "Manager Market",
      slug: "manager-market",
      markdownPath: "/lessons/manager-market.md",
      svgPath: "/illustrations/manager-market.svg",
      readingTime: 6,
    },
    {
      lessonNumber: 11,
      title: "Referral Market",
      slug: "referral-market",
      markdownPath: "/lessons/referral-market.md",
      svgPath: "/illustrations/referral-market.svg",
      readingTime: 6,
    },
    {
      lessonNumber: 12,
      title: "Social Bond",
      slug: "social-bond",
      markdownPath: "/lessons/social-bond.md",
      svgPath: "/illustrations/social-bond.svg",
      readingTime: 7,
    },
  ];

  for (const lesson of lessons) {
    await prisma.lesson.upsert({
      where: {
        lessonNumber: lesson.lessonNumber,
      },
      update: lesson,
      create: lesson,
    });
  }

  console.log("✅ Lessons seeded successfully.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
