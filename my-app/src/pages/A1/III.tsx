import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    ChevronDown,
    CircleUserRound,
    Filter,
    Home,
    RecycleIcon,
    Settings,
} from "lucide-react";

type Props = {};
const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
];
const PageA1III = (props: Props) => {
    return (
        <div className="[--header-height:calc(--spacing(14))]">
            <div className="flex flex-col">
                <header className="bg-[#294172] text-white p-2 sticky top-0 z-50 flex w-full items-center border-b">
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
                                <img src="/noti.png" className="size-4" />
                                <div className="absolute items-center  flex justify-center size-3 text-xs text-white bg-red-500 rounded-full  -top-1 -right-1">
                                    17
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
                                <div
                                    className="flex justify-between items-center
                              border-b-2 border-b-gray-200 "
                                >
                                    <span className="text-xl font-semibold">
                                        FILTER
                                    </span>
                                    <Filter className="inline-block ml-2 size-2.5" />
                                </div>
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-3">
                                <Label htmlFor="picture">Picture</Label>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Theme" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="light">
                                            Light
                                        </SelectItem>
                                        <SelectItem value="dark">
                                            Dark
                                        </SelectItem>
                                        <SelectItem value="system">
                                            System
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-3">
                                <Label htmlFor="picture">Picture</Label>
                                <Input id="picture" type="text" />
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-3">
                                <Label htmlFor="picture">Picture</Label>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Theme" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="light">
                                            Light
                                        </SelectItem>
                                        <SelectItem value="dark">
                                            Dark
                                        </SelectItem>
                                        <SelectItem value="system">
                                            System
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-3">
                                <Label htmlFor="picture">Picture</Label>
                                <Input id="picture" type="text" />
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-3">
                                <Label htmlFor="picture">Picture</Label>
                                <Input id="picture" type="text" />
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-3">
                                <Label htmlFor="picture">Picture</Label>
                                <div className="flex items-center gap-3">
                                    <Checkbox id="terms" />
                                    <Label htmlFor="terms">Ac tions</Label>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Checkbox id="terms" />
                                    <Label htmlFor="terms">tions</Label>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Checkbox id="terms" />
                                    <Label htmlFor="terms">Accept</Label>
                                </div>
                            </div>
                        </div>
                        <Button className="max-h-8" variant="outline">
                            Export Data
                        </Button>
                    </div>
                    <div className="col-span-3 flex flex-col  w-full p-4 border-l-2 border-l-gray-200 ">
                        <div
                            className="flex items-center
                               "
                        >
                            <span className="text-[#294172] font-bold text-xl leading-tight">
                                43 USERS
                            </span>
                            <RecycleIcon className="inline-block ml-2 size-2.5" />
                        </div>
                        <div className="border-2 border-gray-200">
                          <Table>
                              <TableHeader>
                                  <TableRow>
                                      <TableHead className="w-[100px]">
                                          Invoice
                                      </TableHead>
                                      <TableHead>Status</TableHead>
                                      <TableHead>Method</TableHead>
                                      <TableHead className="text-right">
                                          Amount
                                      </TableHead>
                                  </TableRow>
                              </TableHeader>
                              <TableBody>
                                  {invoices.map((invoice) => (
                                      <TableRow key={invoice.invoice}>
                                          <TableCell className="font-medium">
                                              {invoice.invoice}
                                          </TableCell>
                                          <TableCell>
                                              {invoice.paymentStatus}
                                          </TableCell>
                                          <TableCell>
                                              {invoice.paymentMethod}
                                          </TableCell>
                                          <TableCell className="text-right">
                                              {invoice.totalAmount}
                                          </TableCell>
                                      </TableRow>
                                  ))}
                              </TableBody>
                              <TableFooter>
                                  <TableRow>
                                      <TableCell colSpan={3}>Total</TableCell>
                                      <TableCell className="text-right">
                                          $2,500.00
                                      </TableCell>
                                  </TableRow>
                              </TableFooter>
                          </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageA1III;
