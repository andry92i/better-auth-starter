import { DashboardPage } from "./components/dashboard-page";
import { getSession } from "@/server/users";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getSession();
  
  if (!session) {
    redirect("/login");
  }
  
  return (
    <DashboardPage 
      user={{
        name: session.user?.name || "Utilisateur",
        email: session.user?.email || "email@exemple.com",
        image: session.user?.image || ""
      }} 
    />
  );
}
