"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function checkAndSetVisitedCookie() {
  const cookieStore = cookies();
  const hasVisited = cookieStore.get("hasVisited");

  if (!hasVisited) {
    cookies().set("hasVisited", "true", { maxAge: 3600 }); // 1時間有効
    redirect("/login");
  }
}
