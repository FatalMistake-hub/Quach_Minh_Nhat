import { AppSidebar } from "@/components/app-sidebar";
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

type Props = {};

const PageA1 = (props: Props) => {
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
                                    <BreadcrumbPage>A1</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    <Separator className="" />{" "}
                    <span className="text-2xl font-semibold">Description </span>
                    <Separator className="" />
                    <ul className="space-y-1 list-inside">
                        <li>
                            <span>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Impedit magni at quisquam
                                nostrum assumenda laudantium, voluptatum magnam
                                ad qui aspernatur aliquam velit et expedita eum
                                excepturi nobis recusandae ea perspiciatis!
                            </span>
                        </li>
                        <li>
                            <span>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Aperiam quod aliquid provident
                                animi similique perspiciatis quis iusto quo
                                itaque dolorem! Facilis sint similique veritatis
                                officiis cum id vitae sequi consequatur?
                            </span>
                        </li>
                    </ul>
                    <p className="text-primary">+ Add sub-tickets</p>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
};

export default PageA1;
