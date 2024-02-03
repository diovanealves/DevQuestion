"use client";

import { redirect, useSearchParams } from "next/navigation";

export default function Category() {
  const search = useSearchParams().get("category");

  if (!search) {
    redirect("/");
  }

  return <div>{search}</div>;
}
