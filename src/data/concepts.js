export const concepts = [
  {
    id: "hard-money",
    title: "Hard Money",
    description: "Money that is difficult to produce, with a high stock-to-flow ratio. Hard money resists debasement and maintains value over time.",
    connections: ["low-time-preference", "capital-accumulation"],
    tooltip: "Money that's difficult to produce or inflate",
    explanation: "Hard money is currency that is difficult to produce or inflate. Throughout history, societies using hard money (like gold) have prospered because it encourages saving and investment. Bitcoin is the hardest money ever created due to its fixed supply of 21 million coins."
  },
  {
    id: "low-time-preference",
    title: "Low Time Preference",
    description: "The willingness to delay immediate gratification for greater future rewards. Hard money encourages low time preference by maintaining purchasing power over time.",
    connections: ["capital-accumulation", "civilization-growth"],
    tooltip: "Valuing future rewards over immediate gratification",
    explanation: "Low time preference means valuing future rewards over immediate gratification. When money holds its value, people are more likely to save and invest for the long term rather than consume immediately. This mindset is essential for building civilization and technological progress."
  },
  {
    id: "capital-accumulation",
    title: "Capital Accumulation",
    description: "The process of increasing productive capacity through saving and investment. Low time preference leads to capital accumulation as people defer consumption to build future productive capacity.",
    connections: ["civilization-growth"],
    tooltip: "Building productive resources through saving and investment",
    explanation: "Capital accumulation is the process of building productive resources through saving and investment. When people save under a hard money standard, these savings can be channeled into productive investments that increase society's wealth and productive capacity over time."
  },
  {
    id: "civilization-growth",
    title: "Civilization Growth",
    description: "The advancement of human society through technological innovation, cultural development, and increased prosperity. Capital accumulation enables civilization growth by providing resources for long-term projects.",
    connections: [],
    tooltip: "Advancement of society through innovation and prosperity",
    explanation: "Civilization growth refers to the advancement of human society through technological innovation, cultural development, and increased prosperity. Hard money and low time preference create the conditions for capital accumulation, which provides the resources necessary for long-term projects that advance civilization."
  },
  {
    id: "soft-money",
    title: "Soft Money",
    description: "Money that is easy to produce, with a low stock-to-flow ratio. Soft money is susceptible to debasement and loses value over time.",
    connections: ["inflation", "high-time-preference"],
    tooltip: "Money that's easy to produce or inflate",
    explanation: "Soft money is currency that is easy to produce or inflate. Fiat currencies controlled by governments are examples of soft money, as their supply can be increased at will. Soft money tends to lose value over time, discouraging saving and encouraging consumption."
  },
  {
    id: "inflation",
    title: "Inflation",
    description: "The increase in money supply that leads to rising prices and diminishing purchasing power. Soft money systems inevitably lead to inflation as authorities increase the money supply.",
    connections: ["high-time-preference"],
    tooltip: "Expansion of money supply leading to rising prices",
    explanation: "Inflation is the expansion of money supply leading to rising prices and diminishing purchasing power. When money is easy to create, authorities tend to increase its supply, causing inflation. This erodes savings and forces people to seek returns that outpace inflation rather than focusing on productive investments."
  },
  {
    id: "high-time-preference",
    title: "High Time Preference",
    description: "The preference for immediate consumption over future rewards. Soft money encourages high time preference as holding money becomes costly due to inflation.",
    connections: ["economic-decay"],
    tooltip: "Valuing immediate gratification over future rewards",
    explanation: "High time preference means valuing immediate gratification over future rewards. When money loses value through inflation, people are incentivized to spend quickly rather than save. This short-term thinking leads to consumption over investment and undermines long-term planning."
  },
  {
    id: "economic-decay",
    title: "Economic Decay",
    description: "The deterioration of economic systems characterized by malinvestment, debt accumulation, and declining productivity. High time preference leads to economic decay as resources are consumed rather than invested productively.",
    connections: [],
    tooltip: "Deterioration of economic systems through malinvestment",
    explanation: "Economic decay is the deterioration of economic systems characterized by malinvestment, debt accumulation, and declining productivity. When high time preference dominates society, resources are consumed rather than invested productively, leading to economic stagnation and decline."
  },
  {
    id: "bitcoin",
    title: "Bitcoin",
    description: "The first and most secure decentralized digital currency, with a fixed supply of 21 million coins. Bitcoin combines the scarcity of gold with the transferability of digital information.",
    connections: ["digital-hard-money"],
    tooltip: "Decentralized digital currency with fixed supply",
    explanation: "Bitcoin is the first and most secure decentralized digital currency, created in 2009. It has a fixed supply of 21 million coins, making it the hardest money ever created. Bitcoin combines the scarcity properties of gold with the transferability advantages of digital information."
  },
  {
    id: "digital-hard-money",
    title: "Digital Hard Money",
    description: "Money that exists in digital form while maintaining the properties of hard money, particularly scarcity and resistance to debasement. Bitcoin is the first successful implementation of digital hard money.",
    connections: ["global-economic-coordination"],
    tooltip: "Scarce digital currency resistant to debasement",
    explanation: "Digital hard money is currency that exists in digital form while maintaining the properties of hard money, particularly scarcity and resistance to debasement. Bitcoin pioneered this category by solving the double-spending problem through its blockchain technology, creating digital scarcity for the first time."
  },
  {
    id: "global-economic-coordination",
    title: "Global Economic Coordination",
    description: "The ability for economic actors worldwide to coordinate activities using a common monetary standard. Bitcoin enables global economic coordination by providing a neutral, borderless monetary system.",
    connections: [],
    tooltip: "Worldwide economic cooperation through neutral money",
    explanation: "Global economic coordination refers to the ability for economic actors worldwide to coordinate activities using a common monetary standard. Bitcoin enables this by providing a neutral, borderless monetary system that isn't controlled by any government or corporation, potentially allowing for more efficient global trade and investment."
  }
];