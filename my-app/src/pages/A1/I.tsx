import { AppSidebar } from "@/components/SideBar/app-sidebar";
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import {
    SidebarProvider,
    SidebarInset,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { ArrowUp, ChevronDown, ChevronRight, DessertIcon } from "lucide-react";

type Props = {};

const PageA1I = (props: Props) => {
    return (
        <div className="text-gray-600">
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
                                        <BreadcrumbPage>A1.I</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </header>
                    <Separator className="" />{" "}
                    <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-4 p-4 pt-0">
                        <div className="col-span-2 gap-4  max-sm:col-span-1 flex flex-col p-4">
                            <span className="text-xl font-medium">
                                <DessertIcon className="inline-block mr-2 size-6" />
                                Description{" "}
                            </span>
                            <Separator className="" />
                            <ul className="space-y-1 list-inside">
                                <li>
                                    <span>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Impedit magni at quisquam
                                        nostrum assumenda laudantium, voluptatum
                                        magnam ad qui aspernatur aliquam velit et
                                        expedita eum excepturi nobis recusandae ea
                                        perspiciatis!
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Aperiam quod aliquid
                                        provident animi similique perspiciatis quis
                                        iusto quo itaque dolorem! Facilis sint
                                        similique veritatis officiis cum id vitae
                                        sequi consequatur?
                                    </span>
                                </li>
                            </ul>
                            <p className="text-primary">+ Add sub-tickets</p>
                            <span className="text-xl font-medium mt-12">
                                <DessertIcon className="inline-block mr-2 size-6" />
                                Activity{" "}
                            </span>
                            <Separator className="" />
    
                            <div>
                                <div className="mt-6">
                                    <ol className="relative border-s border-gray-200">
                                        <>
                                            {[
                                                "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
                                                "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
                                                "Get started with dozens of web components and interactive elements built on top of Tailwind CSS.",
                                            ].map((content, index) => (
                                                <>
                                                    <li
                                                        key={index}
                                                        className={`ms-6 ${index !== 2 ? "mb-10" : ""}`}
                                                    >
                                                        <div className="absolute -start-1.5 py-2 bg-white rounded-full">
                                                            <div
                                                                className={`w-3 h-3 ${index % 2 === 0 ? "bg-[#22AD5C]" : "bg-[#005A86]"} rounded-full border border-white`}
                                                            />
                                                        </div>
                                                        <p className="text-base font-normal text-gray-500">
                                                            {content}
                                                        </p>
                                                    </li>
                                                </>
                                            ))}
                                        </>
                                    </ol>
                                </div>
                                <div className="mt-6">
                                    <div className="relative">
                                        <textarea
                                            data-slot="textarea"
                                            className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content w-full rounded-md border px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm min-h-[80px] pr-12 resize-none border-none bg-[#ECECEC] placeholder:text-[12px] focus-visible:border-none"
                                            placeholder="Leave a comment..."
                                        ></textarea>
                                        <button
                                            data-slot="button"
                                            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 absolute bottom-2 right-2"
                                        >
                                            <ArrowUp className="size-4 text-[#005B86]" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div className="col-span-1 border-l-2 border-l-gray-200 max-sm:border-l-0 max-sm:col-span-1 flex flex-col">
                            <div className="flex items-center justify-between p-4">
                                <span className="text-xl font-semibold">
                                    Properties
                                    <ChevronDown className="inline-block ml-2 size-2.5" />
                                </span>
                                <ChevronRight className="inline-block size-7" />
                            </div>
                            <Separator className="" />
                            <div className="flex flex-col">
                                {[
                                    {
                                        label: "Status:",
                                        value: "In-Progress",
                                        className: "text-blue-500",
                                    },
                                    {
                                        label: "Priority:",
                                        value: "Critical",
                                        className: "text-red-700",
                                    },
                                    {
                                        label: "Assignee:",
                                        value: "Trangntt",
                                    },
                                    {
                                        label: "Type:",
                                        value: "Bug",
                                    },
                                    {
                                        label: "Start date:",
                                        value: "2025-10-01",
                                    },
                                    {
                                        label: "Target date:",
                                        value: "2025-10-31",
                                    },
                                ].map((item, index) => (
                                    <div key={index} className="flex p-4">
                                        <span className="flex-1">{item.label}</span>
                                        <div className="flex-1">
                                            <ChevronDown className="inline-block mr-2 size-4" />
                                            <span className={item.className || ""}>
                                                {item.value}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </div>
    );
};

export default PageA1I;
