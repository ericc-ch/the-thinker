import { Button } from "@mantine/core";

import type { Route } from "./+types/home";

export default function Home() {
  return <Button>Wow</Button>;
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { content: "Welcome to React Router!", name: "description" },
  ];
}
