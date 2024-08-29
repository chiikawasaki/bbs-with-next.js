import * as React from "react";
import BBSCardList from "./components/BBSCardList";
import { PrismaClient } from "@prisma/client";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  });

  return (
    <main>
      <BBSCardList />
    </main>
  );
}
