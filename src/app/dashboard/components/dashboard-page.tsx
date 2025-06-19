"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Logout } from "@/components/logout";
import {
  Bell,
  ChevronRight,
  CreditCard,
  DollarSign,
  LineChart,
  Users,
  Activity,
  Settings,
  User,
  Home,
  Menu,
  X,
} from "lucide-react";

interface DashboardPageProps {
  user: {
    name: string;
    email: string;
    image?: string;
  };
}

export function DashboardPage({ user }: DashboardPageProps) {
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleSidebarCollapse = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleSidebar}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle sidebar</span>
        </Button>
        <div className="flex items-center gap-2 font-semibold">
          <LineChart className="h-6 w-6" />
          <span className="md:block hidden">Better Auth Dashboard</span>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={user.image} alt={user.name} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="hidden md:block">
              <p className="text-sm font-medium">{user.name}</p>
              <p className="text-xs text-muted-foreground">{user.email}</p>
            </div>
          </div>
          <Logout />
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 relative">
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
            onClick={toggleSidebar}
          />
        )}

        {/* Sidebar - Now responsive */}
        <aside
          className={`
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
            md:translate-x-0
            fixed md:sticky top-16 h-[calc(100vh-4rem)]
            ${sidebarCollapsed ? "md:w-16" : "md:w-64"} 
            w-64 shrink-0 border-r bg-background z-50
            transition-all duration-200 ease-in-out
            md:block
          `}
        >
          <div className="flex h-full flex-col gap-2 p-4">
            <div className="flex justify-between items-center mb-4 md:hidden">
              <h2 className="font-semibold">Navigation</h2>
              <Button variant="ghost" size="icon" onClick={toggleSidebar}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <Button
              variant={activeTab === "overview" ? "default" : "ghost"}
              className={`${sidebarCollapsed ? "justify-center" : "justify-start"}`}
              onClick={() => {
                setActiveTab("overview");
                if (window.innerWidth < 768) setSidebarOpen(false);
              }}
            >
              <Home className={`${sidebarCollapsed ? "" : "mr-2"} h-4 w-4`} />
              {!sidebarCollapsed && <span>Overview</span>}
            </Button>
            <Button
              variant={activeTab === "analytics" ? "default" : "ghost"}
              className={`${sidebarCollapsed ? "justify-center" : "justify-start"}`}
              onClick={() => {
                setActiveTab("analytics");
                if (window.innerWidth < 768) setSidebarOpen(false);
              }}
            >
              <Activity className={`${sidebarCollapsed ? "" : "mr-2"} h-4 w-4`} />
              {!sidebarCollapsed && <span>Analytics</span>}
            </Button>
            <Button
              variant={activeTab === "customers" ? "default" : "ghost"}
              className={`${sidebarCollapsed ? "justify-center" : "justify-start"}`}
              onClick={() => {
                setActiveTab("customers");
                if (window.innerWidth < 768) setSidebarOpen(false);
              }}
            >
              <Users className={`${sidebarCollapsed ? "" : "mr-2"} h-4 w-4`} />
              {!sidebarCollapsed && <span>Users</span>}
            </Button>
            <Button
              variant={activeTab === "settings" ? "default" : "ghost"}
              className={`${sidebarCollapsed ? "justify-center" : "justify-start"}`}
              onClick={() => {
                setActiveTab("settings");
                if (window.innerWidth < 768) setSidebarOpen(false);
              }}
            >
              <Settings className={`${sidebarCollapsed ? "" : "mr-2"} h-4 w-4`} />
              {!sidebarCollapsed && <span>Settings</span>}
            </Button>
            <Button
              variant={activeTab === "profile" ? "default" : "ghost"}
              className={`${sidebarCollapsed ? "justify-center" : "justify-start"}`}
              onClick={() => {
                setActiveTab("profile");
                if (window.innerWidth < 768) setSidebarOpen(false);
              }}
            >
              <User className={`${sidebarCollapsed ? "" : "mr-2"} h-4 w-4`} />
              {!sidebarCollapsed && <span>Profile</span>}
            </Button>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 overflow-auto p-4 md:p-6 bg-muted">
          <Tabs
            defaultValue="overview"
            className="w-full"
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <div className="md:flex grid items-center justify-between">
              <div className="flex items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:block hidden"
                  onClick={toggleSidebarCollapse}
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle sidebar</span>
                </Button>
                <h1 className="text-2xl font-bold">Dashboard</h1>
              </div>
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="customers">Users</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="overview" className="space-y-4 mt-4">
              {/* Stats Cards */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Revenue
                    </CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$45,231.89</div>
                    <p className="text-xs text-muted-foreground">
                      +20.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Subscriptions
                    </CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+2350</div>
                    <p className="text-xs text-muted-foreground">
                      +180.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Sales</CardTitle>
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+12,234</div>
                    <p className="text-xs text-muted-foreground">
                      +19% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Active Users
                    </CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+573</div>
                    <p className="text-xs text-muted-foreground">
                      +201 since last week
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Performance Overview</CardTitle>
                  <CardDescription>
                    User and revenue trends over the last 30 days
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-80">
                  <div className="h-full w-full rounded-md border border-dashed flex items-center justify-center">
                    <p className="text-muted-foreground">
                      Performance chart (integrate your preferred charting
                      library here)
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>
                    You had 265 transactions this month
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <Avatar className="h-9 w-9">
                          <AvatarImage
                            src={activity.userImage}
                            alt={activity.userName}
                          />
                          <AvatarFallback>
                            {activity.userName.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            {activity.userName}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {activity.action}
                          </p>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {activity.time}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <span>View all transactions</span>
                    <ChevronRight className="ml-auto h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Analytics</CardTitle>
                  <CardDescription>
                    Detailed statistics and data analysis
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-[450px]">
                  <div className="h-full w-full rounded-md border border-dashed flex items-center justify-center">
                    <p className="text-muted-foreground">
                      Analytics content coming soon
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="customers" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>User listing and management</CardDescription>
                </CardHeader>
                <CardContent className="h-[450px]">
                  <div className="h-full w-full rounded-md border border-dashed flex items-center justify-center">
                    <p className="text-muted-foreground">
                      User list coming soon
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}

// Mock data for recent activity
const recentActivities = [
  {
    userName: "Sophie Martin",
    userImage: "",
    action: "Purchased Premium Plan",
    time: "2h ago",
  },
  {
    userName: "Thomas Dubois",
    userImage: "",
    action: "Updated their profile",
    time: "5h ago",
  },
  {
    userName: "Emma Bernard",
    userImage: "",
    action: "Joined as a new member",
    time: "8h ago",
  },
  {
    userName: "Lucas Petit",
    userImage: "",
    action: "Cancelled subscription",
    time: "1d ago",
  },
  {
    userName: "Chloé Leroy",
    userImage: "",
    action: "Changed their plan",
    time: "2d ago",
  },
];
