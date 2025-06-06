import {
    BookOpenText,
    Building,
    Calculator,
    CircleHelp,
    Frame,
    LayoutDashboard,
    Map,
    PieChart,
    SquarePen,
} from "lucide-react";
import * as React from "react";

import { NavUser } from "@/components/SideBar/nav-user";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavSecondary } from "./nav-secondary";

const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title: "Overview",
            url: "#",
            icon: LayoutDashboard,
            isActive: true,
        },
        {
            title: "Inquiries",
            url: "#",
            icon: CircleHelp,
        },
        {
            title: "Estimator",
            url: "/A1/II",
            icon: Calculator,
        },
        {
            title: "Projects",
            url: "/A1/I",
            icon: SquarePen,
        },
    ],
    navSecondary: [
        {
            title: "Administrations",
            url: "#",
            icon: Building,
        },
        {
            title: "Documentation",
            url: "#",
            icon: BookOpenText,
        },
    ],
    projects: [
        {
            name: "Design Engineering",
            url: "#",
            icon: Frame,
        },
        {
            name: "Sales & Marketing",
            url: "#",
            icon: PieChart,
        },
        {
            name: "Travel",
            url: "#",
            icon: Map,
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" variant="inset" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                            size="lg"
                            asChild
                        >
                            <a href="#" className="gap-4">
                                <div className="text-sidebar-primary-foreground flex aspect-square items-center justify-center rounded-lg">
                                    {/* <Command className="size-4" /> */}
                                    <img
                                        src="/public/b8a5d69f3c86873d84374208c1a9cd636984f521.jpg"
                                        alt=""
                                        className="object-cover size-12"
                                    />
                                </div>
                                <div className="grid text-primary flex-1 text-left text-sm leading-tight">
                                    <span className="truncate text-xl font-semibold">
                                        ABC Company
                                    </span>
                                    <span className="text-primary truncate text-base font-normal">
                                        Lisa Rose
                                    </span>
                                </div>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <div className="flex flex-col justify-between h-full">
                    <NavMain items={data.navMain} />
                    {/* <NavProjects projects={data.projects} /> */}
                    <NavSecondary items={data.navSecondary} />
                </div>
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
        </Sidebar>
    );
}
