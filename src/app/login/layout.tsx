import { getSession } from "@/server/users"
import { redirect } from "next/navigation"

export default async function layout ({ children }: { children: React.ReactNode }) {
    const session = await getSession()

    if (session) {
        return redirect("/dashboard")
    }
  return (
    <main>{children}</main>
  )
}
