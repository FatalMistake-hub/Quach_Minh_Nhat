"use client";

import { ExternalLinkIcon } from "lucide-react";

import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavUser() {
    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                    <img
                        src="/LOGO small.png"
                        alt="logo"
                        className="h-6 w-auto group-data-[collapsible=icon]:block hidden transition-all duration-200"
                    />
                    <img
                        src="/LOGO (Light mode).png"
                        alt="logo"
                        className="h-8 w-auto group-data-[collapsible=icon]:hidden block transition-all duration-200"
                    />
                    <div className="text-[#005A86] ml-auto group-data-[collapsible=icon]:hidden">
                        <ExternalLinkIcon className="size-4 transition-all duration-200" />
                    </div>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    );
}
