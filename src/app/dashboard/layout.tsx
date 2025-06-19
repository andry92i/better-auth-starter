import { getSession } from "@/server/users"
import { redirect } from "next/navigation"

export default function layout ({ children }: { children: React.ReactNode }) {
    const session = getSession()

    if (!session) {
        return redirect("/")
    }
  return (
    <main>{children}</main>
  )
}
