import { createFileRoute } from "@tanstack/react-router";
import { Bonerita } from "@/components/bonerita";

export const Route = createFileRoute("/")({
  component: Bonerita,
  head: () => ({
    meta: [{ title: "$BONERITA — Every turn needs one" }],
  }),
});
