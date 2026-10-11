import { createFileRoute } from "@tanstack/react-router";
import { XPosts } from "@/components/xposts";

export const Route = createFileRoute("/xposts")({
  component: XPosts,
  head: () => ({
    meta: [
      { title: "X News — $BONERITA" },
      {
        name: "description",
        content: "Pictures for X. Copy the line. Download the picture. Every turn needs a BONERITA.",
      },
    ],
  }),
});
