export interface BlogPost {
  title: string;
  description: string;
  slug: string;
  date: string;         // ISO format: YYYY-MM-DD
  category: string;
}

// ─────────────────────────────────────────────
// ADD NEW POSTS HERE — blog index updates automatically
// ─────────────────────────────────────────────
export const posts: BlogPost[] = [
  {
    title: "How Much Does Windshield Replacement Cost in Lubbock, TX?",
    description: "Price ranges by vehicle type, what drives the cost up or down — and how to use your insurance so you pay as little as possible.",
    slug: "windshield-replacement-cost-lubbock-tx",
    date: "2025-05-23",
    category: "Pricing & Cost",
  },
];

// Sorted newest-first — used by the blog index
export const sortedPosts = [...posts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);
