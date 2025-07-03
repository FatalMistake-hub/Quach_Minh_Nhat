import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { Progress } from "@/components/ui/progress";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Bell,
    Book,
    ChartLine,
    ChevronDown,
    ChevronRight,
    CircleUserRound,
    Copy,
    Edit,
    ExternalLink,
    File,
    Filter,
    Home,
    Paperclip,
    Percent,
    RecycleIcon,
    Settings,
} from "lucide-react";

const data = [
    {
        name: "Mr. David Nguyen",
        id: "LO00001",
        contact: "david.nguyen@gmail.com",
        phone: "(322) 243-3452",
        type: "Loan Officer",
        experience: "5 years",
        status: "Active",
        imageUrl: "/public/Userpic1.png",
    },
    {
        name: "Ms. Sarah Johnson",
        id: "LO00002",
        contact: "sarah@gmail.com",
        phone: "(322) 243-3453",
        type: "Loan Officer",
        experience: "3 years",
        status: "Inactive",
        imageUrl: "/public/Userpic1.png",
    },
    {
        name: "Mr. John Smith",
        id: "LO00003",
        contact: "john@gmail.com",
        phone: "(322) 243-3454",
        type: "Loan Officer",
        experience: "2 years",
        status: "Active",
        imageUrl: "/public/Userpic1.png",
    },
    {
        name: "Ms. Emily Davis",
        id: "LO00004",
        contact: "emily@gmail.com",
        phone: "(322) 243-3455",
        type: "Loan Officer",
        experience: "4 years",
        status: "Active",
        imageUrl: "/public/Userpic1.png",
    },
    {
        name: "Mr. Michael Brown",
        id: "LO00005",
        contact: " michael@gmail.com",
        phone: "(322) 243-3456",
        type: "Loan Officer",
        experience: "6 years",
        status: "Inactive",
        imageUrl: "/public/Userpic1.png",
    },
];
const data1 = [
    {
        name: "Mr. Hang Nguyen",
        id: "#LA00001",
        lender: "AD Mortgage",
        interest: "6% (6.168% APR)",
        progress: 68,
        status: "IN PROGRESS",
    },
    {
        name: "Mr. Hang Nguyen",
        id: "#LA00001",
        lender: "AD Mortgage",
        interest: "6% (6.168% APR)",
        progress: 68,
        status: "IN PROGRESS",
    },
];
const PageA1III = () => {
    return (
        <div className="[--header-height:calc(--spacing(14))]">
            <div className="flex flex-col text-gray-600 min-h-screen">
                <header className="bg-[#294172] text-white p-2 sticky top-0 z-10 flex w-full items-center border-b">
                    <div className="items-center  flex justify-between w-full">
                        <div className="items-center flex ">
                            <div className=" text-green-400 font-jersey text-[16px] font-bold w-48">
                                COMPANY LOGO XXX
                            </div>
                            <Home className="size-5 ml-4 mr-2" />
                            <div className="px-2 md:px-3 py-1 text-sm text-gray-800 bg-[#DAE6EF] rounded">
                                <div className="text-xs text-[#294172] font-normal">
                                    Module
                                </div>
                                <div className="font-bold text-[#294172] text-xs ">
                                    USER MANAGEMENT
                                </div>
                            </div>
                        </div>
                        <div className="items-center  flex space-x-2 md:space-x-4">
                            <div className="relative">
                                <Bell className="size-4  text-white" />
                                <div className="absolute items-center  flex justify-center size-3 text-xs text-white bg-red-500 rounded-full  -top-1 -right-1">
                                    12
                                </div>
                            </div>
                            <Settings className="size-4" />
                            <div className="flex items-center space-x-2">
                                <CircleUserRound className="size-6" />
                                <div className="text-sm">
                                    <div className="font-bold">
                                        Mr. David Nguyen
                                    </div>
                                    <div className="text-xs text-gray-300">
                                        Home Company
                                    </div>
                                </div>
                                <ChevronDown className="size-4" />
                            </div>
                        </div>
                    </div>
                </header>
                <div className="grid grid-cols-7 min-h-screen">
                    <div className="col-span-1 flex flex-col justify-between w-full p-4  ">
                        <div className="flex flex-col  gap-4">
                            <div>
                                <div className="flex justify-between items-center">
                                    <span className="font-medium text-base leading-normal">
                                        FILTER
                                    </span>
                                    <Filter className="inline-block ml-2 size-2.5" />
                                </div>
                            </div>
                            <Separator className="" />
                            <div className="grid w-full max-w-sm items-center gap-3">
                                <Label
                                    className="font-semibold text-[#111928]"
                                    htmlFor="picture"
                                >
                                    User Name
                                </Label>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                </Select>
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-3">
                                <Label
                                    className="font-semibold text-[#111928]"
                                    htmlFor="picture"
                                >
                                    User ID
                                </Label>
                                <Input id="picture" type="Input" />
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-3">
                                <Label
                                    className="font-semibold text-[#111928]"
                                    htmlFor="picture"
                                >
                                    User type
                                </Label>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                </Select>
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-3">
                                <Label
                                    className="font-semibold text-[#111928]"
                                    htmlFor="picture"
                                >
                                    Phone number
                                </Label>
                                <Input id="picture" type="text" />
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-3">
                                <Label
                                    className="font-semibold text-[#111928]"
                                    htmlFor="picture"
                                >
                                    Email address
                                </Label>
                                <Input id="picture" type="Input" />
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-3">
                                <Label
                                    className="font-semibold text-[#111928]"
                                    htmlFor="picture"
                                >
                                    Status
                                </Label>
                                <div className="flex items-center gap-3">
                                    <Checkbox id="terms" />
                                    <Label htmlFor="terms">All</Label>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Checkbox id="terms" />
                                    <Label htmlFor="terms">Active</Label>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Checkbox id="terms" />
                                    <Label htmlFor="terms">Inactive</Label>
                                </div>
                            </div>
                        </div>
                        <Button className="max-h-8" variant="outline">
                            Export Data
                        </Button>
                    </div>
                    <div className="col-span-3 flex flex-col  w-full border-l-2 border-l-gray-200 ">
                        <div className="flex items-center text-[#294172] p-4">
                            <span className="font-bold text-xl leading-tight">
                                43 USERS
                            </span>
                            <RecycleIcon className="inline-block ml-2 size-4.5" />
                        </div>
                        <div className="flex min-h-screen h-full flex-col justify-between border-y-2 border-gray-200">
                            <Table>
                                <TableHeader className="bg-[#DAE6EF]">
                                    <TableRow>
                                        <TableHead className="text-left">
                                            <Checkbox
                                                className="bg-white"
                                                aria-label="Select row"
                                            />
                                        </TableHead>
                                        <TableHead className="text-left">
                                            <p>User Name</p>
                                            <p>User ID</p>
                                        </TableHead>
                                        <TableHead className="text-left">
                                            Contact Info
                                        </TableHead>
                                        <TableHead className="text-left">
                                            Type
                                        </TableHead>
                                        <TableHead className="text-left">
                                            Experience
                                        </TableHead>
                                        <TableHead className="text-left">
                                            Status
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {data.map((invoice) => (
                                        <TableRow key={invoice.id}>
                                            <TableCell>
                                                <Checkbox
                                                    className=""
                                                    aria-label="Select row"
                                                />
                                            </TableCell>
                                            <TableCell className="font-medium flex gap-2 text-left">
                                                <Avatar>
                                                    <AvatarImage
                                                        src={invoice.imageUrl}
                                                        alt={invoice.name}
                                                    />
                                                </Avatar>
                                                <div className="ml-2">
                                                    <p className="font-semibold text-[#111928]">{invoice.name}</p>
                                                    <p>{invoice.id}</p>
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-left">
                                                <p>{invoice.phone}</p>
                                                <p>{invoice.contact}</p>
                                            </TableCell>
                                            <TableCell className="text-left">
                                                {invoice.type}
                                            </TableCell>
                                            <TableCell className="text-left">
                                                {invoice.experience}
                                            </TableCell>
                                            <TableCell className="text-left">
                                                <Badge
                                                    variant="secondary"
                                                    className="bg-[#F6FFED] text-[#43A047]  "
                                                >
                                                    {invoice.status}
                                                </Badge>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <div className="flex p-2 justify-between border-t-2 border-t-gray-200">
                                <div className="mx-0 w-fit">
                                    <Pagination>
                                        <PaginationContent>
                                            <PaginationItem>
                                                <PaginationPrevious
                                                    className="border-1 "
                                                    href="#"
                                                />
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink
                                                    className="border-1 bg-[#E6EFF3] text-[#294172]"
                                                    isActive={true}
                                                    href="#"
                                                >
                                                    1
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink
                                                    className="border-1 "
                                                    href="#"
                                                >
                                                    2
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink
                                                    className="border-1 "
                                                    href="#"
                                                >
                                                    3
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationEllipsis className="border-1 " />
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink
                                                    className="border-1 "
                                                    href="#"
                                                >
                                                    10
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationNext
                                                    className="border-1 "
                                                    href="#"
                                                />
                                            </PaginationItem>
                                        </PaginationContent>
                                    </Pagination>
                                </div>
                                <div className="w-[123px]">
                                    <Select value="5">
                                        <SelectTrigger className="w-full">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="5">
                                                05 Items
                                            </SelectItem>
                                            <SelectItem value="10">
                                                10 Items
                                            </SelectItem>
                                            <SelectItem value="20">
                                                20 Items
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 flex flex-col p-4 gap-4 w-full border-l-2 border-l-gray-200 ">
                        <div className="flex items-center">
                            <Book className="inline-block mr-2 size-4.5" />
                            <span className="font-medium text-base leading-normal">
                                GENERAL INFORMATION{" "}
                            </span>
                        </div>
                        <Separator className="" />
                        <div className="space-y-3">
                            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                                {[
                                    { label: "First Name", value: "David" },
                                    { label: "Last Name", value: "Nguyen" },
                                    {
                                        label: "Email",
                                        value: "david@gmail.com",
                                    },
                                    { label: "Phone", value: "(322) 243-3452" },
                                    {
                                        label: "User Type",
                                        value: "Loan Officer",
                                    },
                                    { label: "Experience", value: "5 years" },
                                    { label: "Status", value: "Active" },
                                    { label: "User ID", value: "LO00001" },
                                ].map((item, index) => (
                                    <div key={index}>
                                        <Label className="text-xs mb-2 font-bold text-[#111928]">
                                            {item.label}
                                        </Label>
                                        <div className="text-xs mb-2 font-medium text-gray-500">
                                            {item.value}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center">
                            <Percent className="inline-block mr-2 size-4.5" />
                            <span className="font-medium text-base leading-normal">
                                COMMISSION STRUCTURES{" "}
                            </span>
                            <ChevronRight className="inline-block ml-2 size-4 " />
                        </div>
                        <Separator className="" />
                        <div className="flex items-center">
                            <Paperclip className="inline-block mr-2 size-4.5" />
                            <span className="font-medium text-base leading-normal">
                                RECRUITMENT DOCUMENTS{" "}
                            </span>
                            <ChevronRight className="inline-block ml-2 size-4 " />
                        </div>
                        <Separator className="" />
                        <div className="flex items-center">
                            <Copy className="inline-block mr-2 size-4.5" />
                            <span className="font-medium text-base leading-normal">
                                RELATED CLIENTS & LOAN DOCUMENTS{" "}
                            </span>
                            <ChevronDown className="inline-block ml-2 size-4" />
                        </div>
                        <Separator className="" />
                        <Table>
                            <TableHeader className="bg-[#DAE6EF]">
                                <TableRow>
                                    <TableHead className="text-left">
                                        Index
                                    </TableHead>
                                    <TableHead className="text-left">
                                        <p>Borrower Name</p>
                                        <p>Loan ID</p>
                                    </TableHead>
                                    <TableHead className="text-left">
                                        <p>Lender</p>
                                        <p>Interest Rate</p>
                                    </TableHead>
                                    <TableHead className="text-left">
                                        Process
                                    </TableHead>
                                    <TableHead className="text-left">
                                        Status
                                    </TableHead>
                                    <TableHead className="text-left">
                                        Action
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {data1.map((invoice, index) => (
                                    <TableRow key={invoice.id}>
                                        <TableCell>
                                            {index < 10 ? 0 : ""}
                                            {index + 1}
                                        </TableCell>
                                        <TableCell className="text-left">
                                            <p className="font-semibold text-[#111928]">
                                                {invoice.name}
                                            </p>
                                            <p>{invoice.id}</p>
                                        </TableCell>
                                        <TableCell className="text-left">
                                            <p className="font-semibold text-[#111928]">
                                                {invoice.lender}
                                            </p>
                                            <p>{invoice.interest}</p>
                                        </TableCell>
                                        <TableCell className="text-left ">
                                            <div className="flex items-center">
                                                <Progress
                                                    color="#294172"
                                                    value={invoice.progress}
                                                    className="mr-2 mb-2 "
                                                />{" "}
                                                <span>{invoice.progress}%</span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-left">
                                            <Badge
                                                variant="secondary"
                                                className="bg-[#E6F7FF] text-[#2979FF]  "
                                            >
                                                {invoice.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-left">
                                            <File className="inline-block w-[11px] h-[13px] text-[#4D69FF]" />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <div className="flex items-center">
                            <ChartLine className="inline-block mr-2 size-4.5" />
                            <span className="font-medium text-base leading-normal">
                                PERFORMANCE{" "}
                            </span>
                            <ChevronRight className="inline-block ml-2 size-4" />
                        </div>
                        <Separator className="" />
                        <div className="flex items-center">
                            <Edit className="inline-block mr-2 size-4.5" />
                            <span className="font-medium text-base leading-normal">
                                TO-DO{" "}
                            </span>
                        </div>
                        <Separator className="" />
                        <div className="grid w-full max-w-sm items-center gap-4">
                            <div className="flex items-center gap-4">
                                <Checkbox id="terms" />
                                <Label className="font-semibold text-[#111928]" htmlFor="terms">
                                    Review Loan Applications
                                </Label>
                                <ExternalLink className="inline-block text-[#4D69FF]  size-3" />
                            </div>
                            <div className="flex items-center gap-4">
                                <Checkbox id="terms" />
                                <Label className="font-semibold text-[#111928]" htmlFor="terms">
                                    Contact to Borrower
                                </Label>
                                <ExternalLink className="inline-block text-[#4D69FF]  size-3" />
                            </div>
                            <div className="flex items-center gap-4">
                                <Checkbox id="terms" disabled />
                                <Label className="font-semibold text-[#111928]" htmlFor="terms">
                                    Click to add new todo
                                </Label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageA1III;
