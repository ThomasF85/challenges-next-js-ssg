const posts = [
  {
    id: "1",
    name: "Nextjs - Basics",
    description: "React on Steroids.",
  },
  {
    id: "2",
    name: "Nextjs - Routing",
    description: "Navigation made simple.",
  },
  {
    id: "3",
    name: "Nextjs - Pre-rendering",
    description: "Static Site Generation for super fast websites.",
  },
  {
    id: "4",
    name: "Nextjs - Mongoose",
    description: "Connect Nextjs to MongoDB.",
  },
  {
    id: "5",
    name: "Nextjs - API",
    description: "CRUD Operations with zero config.",
  },
];

export function getAllPosts() {
  return posts;
}

export function getPostById(id) {
  return posts.find((post) => post.id === id);
}
