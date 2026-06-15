export const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    description: "Best for individuals",
    price: 9,
    monthlyPrice: 9,
    yearlyPrice: 99,
    billingCycle: "month",
    popular: false,
    features: [
      { name: "3 Projects", included: true },
      { name: "Basic Analytics", included: true },
      { name: "Community Support", included: true },
      { name: "1 Team Member", included: true },
      { name: "Advanced Analytics", included: false },
      { name: "Priority Support", included: false },
    ],
    cta: "Get Started",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "pro",
    name: "Pro",
    description: "Best for startups",
    price: 29,
    monthlyPrice: 29,
    yearlyPrice: 319,
    billingCycle: "month",
    popular: true,
    features: [
      { name: "Unlimited Projects", included: true },
      { name: "Advanced Analytics", included: true },
      { name: "Priority Support", included: true },
      { name: "Custom Domain", included: true },
      { name: "Up to 10 Team Members", included: true },
      { name: "API Access", included: false },
    ],
    cta: "Start Free Trial",
    gradient: "from-violet-500 via-purple-500 to-pink-500",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Best for large teams",
    price: 99,
    monthlyPrice: 99,
    yearlyPrice: 1090,
    billingCycle: "month",
    popular: false,
    features: [
      { name: "Everything in Pro", included: true },
      { name: "Dedicated Support", included: true },
      { name: "Advanced Security", included: true },
      { name: "Unlimited Team Members", included: true },
      { name: "API Access", included: true },
      { name: "Custom Integrations", included: true },
    ],
    cta: "Contact Sales",
    gradient: "from-orange-500 via-red-500 to-pink-500",
  },
];

export const faqs = [
  {
    id: 1,
    question: "Can I switch plans anytime?",
    answer:
      "Yes! You can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.",
  },
  {
    id: 2,
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers for annual plans.",
  },
  {
    id: 3,
    question: "Is there a free trial available?",
    answer:
      "Yes, all plans include a 14-day free trial. No credit card required to get started.",
  },
  {
    id: 4,
    question: "What happens if I exceed my plan limits?",
    answer:
      "We'll notify you when you're approaching your limits. You can upgrade anytime without losing data.",
  },
  {
    id: 5,
    question: "Do you offer discounts for annual billing?",
    answer:
      "Yes! Save 17% when you switch to annual billing. It's like getting 2 months free.",
  },
  {
    id: 6,
    question: "Is there a money-back guarantee?",
    answer:
      "We offer a 30-day money-back guarantee if you're not satisfied with our service.",
  },
];
