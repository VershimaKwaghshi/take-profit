export interface LearningLesson {
  lessonNumber: number;
  title: string;
  slug: string;
  description: string;
  readingTime: number;
  svg: string;
}

export const learningLessons: LearningLesson[] = [
  {
    lessonNumber: 1,
    title: "Trading Market",
    slug: "trading-market",
    description:
      "Understand what financial markets are and how trading works.",
    readingTime: 5,
    svg: "/learning/trading-market.svg",
  },
  {
    lessonNumber: 2,
    title: "Buyers & Sellers",
    slug: "buyers-sellers",
    description:
      "Learn how every trade happens because of buyers and sellers.",
    readingTime: 4,
    svg: "/learning/buyers-sellers.svg",
  },
  {
    lessonNumber: 3,
    title: "Broker",
    slug: "broker",
    description:
      "Understand the role of brokers in financial markets.",
    readingTime: 5,
    svg: "/learning/broker.svg",
  },
  {
    lessonNumber: 4,
    title: "Liquidity Provider",
    slug: "liquidity-provider",
    description:
      "Learn where market liquidity comes from.",
    readingTime: 5,
    svg: "/learning/liquidity-provider.svg",
  },
  {
    lessonNumber: 5,
    title: "Order Flow",
    slug: "order-flow",
    description:
      "Understand how orders move the market.",
    readingTime: 5,
    svg: "/learning/order-flow.svg",
  },
  {
    lessonNumber: 6,
    title: "Regulation",
    slug: "regulation",
    description:
      "Learn why financial markets are regulated.",
    readingTime: 4,
    svg: "/learning/regulation.svg",
  },
  {
    lessonNumber: 7,
    title: "Prop Firm",
    slug: "prop-firm",
    description:
      "Understand proprietary trading firms and how they operate.",
    readingTime: 5,
    svg: "/learning/prop-firm.svg",
  },
  {
    lessonNumber: 8,
    title: "Restitution",
    slug: "restitution",
    description:
      "Learn how Take Profit recovers trading losses.",
    readingTime: 5,
    svg: "/learning/restitution.svg",
  },
  {
    lessonNumber: 9,
    title: "Funded Capital",
    slug: "funded-capital",
    description:
      "Learn how company-funded trading capital works.",
    readingTime: 6,
    svg: "/learning/funded-capital.svg",
  },
  {
    lessonNumber: 10,
    title: "Manager Market",
    slug: "manager-market",
    description:
      "Learn how traders manage multiple accounts.",
    readingTime: 6,
    svg: "/learning/manager-market.svg",
  },
  {
    lessonNumber: 11,
    title: "Referral Market",
    slug: "referral-market",
    description:
      "Learn how referral relationships create long-term value.",
    readingTime: 6,
    svg: "/learning/referral-market.svg",
  },
  {
    lessonNumber: 12,
    title: "Social Bond",
    slug: "social-bond",
    description:
      "Learn how traders can access liquidity through Social Bonds.",
    readingTime: 7,
    svg: "/learning/social-bond.svg",
  },
];
