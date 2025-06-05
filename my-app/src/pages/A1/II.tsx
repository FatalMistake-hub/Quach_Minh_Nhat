import { AppSidebar } from "@/components/SideBar/app-sidebar";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
    SidebarInput,
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ChevronRight, Search } from "lucide-react";

type Props = {};

const PageA1II = (props: Props) => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator
                            orientation="vertical"
                            className="mr-2 data-[orientation=vertical]:h-4"
                        />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink href="#">
                                        Building Your Application
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="hidden md:block" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>
                                        Data Fetching
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="hidden md:block" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>A1.II</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <Separator className="" />{" "}
                <div className="flex flex-col px-16 py-4">
                    <span className="text-xl font-medium mb-[38px]">
                        Work Packages (WP)
                    </span>
                    <div className="grid grid-cols-5 max-sm:grid-cols-1 gap-4 ">
                        <div className="col-span-1  flex flex-col  ">
                            <div className="flex flex-col justify-between">
                                <div className="flex flex-col gap-[23px]">
                                    <div className="">
                                        <ToggleGroup
                                            type="single"
                                            variant="outline"
                                            size="sm"
                                            className="w-full p-0.5 border-gray-200 border-1"
                                            value={"rfx"}
                                        >
                                            <ToggleGroupItem
                                                value="rfx"
                                                aria-label="Toggle RFX WPs"
                                                className="hover:cursor-pointer border-none rounded-sm  text-[12px] text-gray-600 h-7 data-[state=on]:bg-[#E2F5F9] data-[state=on]:text-[#005B86] data-[state=on]:border-blue-50  data-[state=on]:rounded-sm"
                                            >
                                                RFX WPs
                                            </ToggleGroupItem>
                                            <ToggleGroupItem
                                                value="custom"
                                                aria-label="Toggle Custom WPs"
                                                className="hover:cursor-pointer border-none rounded-sm text-[12px] text-gray-600 h-7 data-[state=on]:bg-[#E2F5F9] data-[state=on]:text-[#005B86] data-[state=on]:border-blue-50   data-[state=on]:rounded-sm"
                                            >
                                                Custom WPs
                                            </ToggleGroupItem>
                                        </ToggleGroup>
                                    </div>
                                    <div>
                                        <p className="mb-2.5 font-medium text-lg leading-relaxed">
                                            Categories
                                        </p>
                                        <p className="font-normal text-[#005B86] text-sm leading-normal">
                                            All Work Packages
                                        </p>
                                        <Separator className=" mb-1" />
                                        <p className="font-normal text-sm leading-normal">
                                            Architectural WPs
                                        </p>
                                        <Separator className="mb-1" />
                                        <p className="font-normal text-sm leading-normal">
                                            Development WPs
                                        </p>
                                        <Separator className="mb-1" />
                                        <p className="font-normal text-sm leading-normal">
                                            Operational WPs
                                        </p>
                                        <Separator className="mb-1" />
                                        <p className="font-normal text-sm leading-normal">
                                            Basic
                                        </p>
                                        <Separator className="mb-1" />
                                        <p className="font-normal text-sm leading-normal">
                                            Comprehensive
                                        </p>
                                        <Separator className="mb-1" />
                                        <p className="font-normal text-sm leading-normal">
                                            Advanced
                                        </p>
                                        <Separator className="mb-1" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-4 flex flex-col">
                            <div className="relative max-w-full">
                                <SidebarInput
                                    id="search"
                                    className=" border-gray-300 pl-10 h-9"
                                />
                                <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 opacity-50 select-none" />
                            </div>
                            <div className="mt-4 grid grid-cols-3 gap-x-6 gap-y-4 max-lg:grid-cols-1 max-2xl:grid-cols-2">
                                {Array.from({ length: 9 }, (_, index) => (
                                    <Card
                                        key={index}
                                        className="col-span-1 h-48 border border-gray-200 gap-2 py-2 rounded-sm shadow-sm min-w-fit min-h-fit  "
                                    >
                                        <CardHeader className="pb-1">
                                            <CardTitle className="flex justify-between text-[18px] font-medium text-gray-900 ">
                                                Work package {index + 1}
                                                <ChevronRight className="text-gray-600" />
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-3">
                                            <p className="text-sm leading-relaxed text-gray-600 line-clamp-2">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit. Sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.
                                                Ut enim ad minim veniam, quis
                                                nostrud exercitation ullamco
                                                laboris nisi ut aliquip ex ea
                                                commodo consequat.
                                            </p>
                                            <div className="flex">
                                                <ChevronRight className="mx-1 w-6 h-6  text-gray-400 bg-blue-50" />
                                                <ChevronRight className="mx-1 w-6 h-6  text-gray-400 bg-blue-50" />
                                            </div>

                                            <div className="flex justify-between space-x-2">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="text-xs text-[#005B86] border-gray-200 bg-gray-200 hover:bg-gray-50 hover:cursor-pointer"
                                                >
                                                    View Detail
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="flex justify-center items-center  p-2 border-gray-300 hover:bg-gray-50 hover:cursor-pointer"
                                                    aria-label="Add cart"
                                                >
                                                    <img
                                                        src="/AddCart.svg"
                                                        className="w-4 h-4"
                                                    />
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
};

export default PageA1II;
