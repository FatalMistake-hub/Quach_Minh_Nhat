import React from "react";
import { useStore } from "@nanostores/react";
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
    type ColumnDef,
} from "@tanstack/react-table";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import {
    tableStateStore,
    updateSorting,
    updateColumnFilters,
    updatePagination,
    resetTableState,
} from "@/store/tableStore";
import type { Organization, FilterOption } from "@/types";
import {
    ArrowUpDown,
    ChevronLeft,
    ChevronRight,
    RotateCcw,
    ExternalLink,
} from "lucide-react";
import { DataTableColumnFilter } from "./DataTableColumnFilter";

interface DataTableProps {
    data: Organization[];
    loading?: boolean;
}

export function DataTable({ data, loading = false }: DataTableProps) {
    const tableState = useStore(tableStateStore);
    const [globalFilter, setGlobalFilter] = React.useState("");
    const [isFilterLoading, setIsFilterLoading] = React.useState(false);

    const columns: ColumnDef<Organization>[] = [
        {
            accessorKey: "index",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                    className="h-8 px-2"
                >
                    Index
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => (
                <div className="font-medium">{row.getValue("index")}</div>
            ),
        },
        {
            accessorKey: "organizationId",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                    className="h-8 px-2"
                >
                    Organization ID
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => (
                <div className="font-mono text-sm">
                    {row.getValue("organizationId")}
                </div>
            ),
        },
        {
            accessorKey: "name",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                    className="h-8 px-2"
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => (
                <div
                    className="max-w-[200px] truncate font-medium"
                    title={row.getValue("name")}
                >
                    {row.getValue("name")}
                </div>
            ),
        },
        {
            accessorKey: "website",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                    className="h-8 px-2"
                >
                    Website
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => {
                const website = row.getValue("website") as string;
                return website ? (
                    <a
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-800 max-w-[150px] truncate"
                        title={website}
                    >
                        <ExternalLink className="mr-1 h-3 w-3" />
                        {website.replace(/^https?:\/\//, "")}
                    </a>
                ) : (
                    <span className="text-gray-400">No website</span>
                );
            },
        },
        {
            accessorKey: "country",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                    className="h-8 px-2"
                >
                    Country
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => (
                <div
                    className="max-w-[120px] truncate"
                    title={row.getValue("country")}
                >
                    {row.getValue("country")}
                </div>
            ),
        },
        {
            accessorKey: "description",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                    className="h-8 px-2"
                >
                    Description
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => (
                <div
                    className="max-w-[200px] truncate text-sm"
                    title={row.getValue("description")}
                >
                    {row.getValue("description")}
                </div>
            ),
        },
        {
            accessorKey: "founded",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                    className="h-8 px-2"
                >
                    Founded
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => (
                <div className="text-center">{row.getValue("founded")}</div>
            ),
        },
        {
            accessorKey: "industry",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                    className="h-8 px-2"
                >
                    Industry
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => (
                <Badge
                    variant="outline"
                    className="max-w-[150px] truncate"
                    title={row.getValue("industry")}
                >
                    {row.getValue("industry")}
                </Badge>
            ),
        },
        {
            accessorKey: "numberOfEmployees",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                    className="h-8 px-2"
                >
                    Employees
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => {
                const employees = row.getValue("numberOfEmployees") as number;
                return (
                    <div className="text-right font-medium">
                        {employees ? employees.toLocaleString() : "N/A"}
                    </div>
                );
            },
        },
    ];
    // Get unique values for filters
    const countryOptions: FilterOption[] = Array.from(
        new Set(data.map((org) => org.country).filter(Boolean))
    ).map((country) => ({ value: country, label: country }));

    const industryOptions: FilterOption[] = Array.from(
        new Set(data.map((org) => org.industry).filter(Boolean))
    ).map((industry) => ({ value: industry, label: industry }));

    const foundedYearOptions: FilterOption[] = Array.from(
        new Set(
            data
                .map((org) => org.founded.toString())
                .filter((year) => year !== "0")
        )
    ).map((year) => ({ value: year, label: year }));

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onSortingChange: (updater) => {
            const newSorting =
                typeof updater === "function"
                    ? updater(tableState.sorting)
                    : updater;
            updateSorting(newSorting);
        },
        onColumnFiltersChange: (updater) => {
            const newFilters =
                typeof updater === "function"
                    ? updater(tableState.columnFilters)
                    : updater;
            updateColumnFilters(newFilters);
        },
        onPaginationChange: (updater) => {
            const newPagination =
                typeof updater === "function"
                    ? updater(tableState.pagination)
                    : updater;
            updatePagination(newPagination);
        },
        onGlobalFilterChange: setGlobalFilter,
        state: {
            sorting: tableState.sorting,
            columnFilters: tableState.columnFilters,
            pagination: tableState.pagination,
            globalFilter,
        },
    }); 
    const handleCountryFilter = React.useCallback(
        (values: string[]) => {
            setIsFilterLoading(true);
            const otherFilters = tableState.columnFilters.filter(
                (f) => f.id !== "country"
            );

            if (values.length === 0) {
                updateColumnFilters(otherFilters);
            } else {
                updateColumnFilters([
                    ...otherFilters,
                    { id: "country", value: values },
                ]);
            }

            // Simulate filtering delay
            setTimeout(() => setIsFilterLoading(false), 300);
        },
        [tableState.columnFilters]
    );

    const handleIndustryFilter = React.useCallback(
        (values: string[]) => {
            setIsFilterLoading(true);
            const otherFilters = tableState.columnFilters.filter(
                (f) => f.id !== "industry"
            );

            if (values.length === 0) {
                updateColumnFilters(otherFilters);
            } else {
                updateColumnFilters([
                    ...otherFilters,
                    { id: "industry", value: values },
                ]);
            }

            setTimeout(() => setIsFilterLoading(false), 300);
        },
        [tableState.columnFilters]
    );

    const handleFoundedFilter = React.useCallback(
        (values: string[]) => {
            setIsFilterLoading(true);
            const otherFilters = tableState.columnFilters.filter(
                (f) => f.id !== "founded"
            );

            if (values.length === 0) {
                updateColumnFilters(otherFilters);
            } else {
                updateColumnFilters([
                    ...otherFilters,
                    { id: "founded", value: values },
                ]);
            }

            setTimeout(() => setIsFilterLoading(false), 300);
        },
        [tableState.columnFilters]
    );

    const handleGlobalFilter = React.useCallback((value: string) => {
        setIsFilterLoading(true);
        setGlobalFilter(value);
        setTimeout(() => setIsFilterLoading(false), 300);
    }, []); 
    const countryFilterValue =
        tableState.columnFilters.find((f) => f.id === "country")?.value || [];
    const industryFilterValue =
        tableState.columnFilters.find((f) => f.id === "industry")?.value || [];
    const foundedFilterValue =
        tableState.columnFilters.find((f) => f.id === "founded")?.value || [];

    const SkeletonRow = () => (
        <TableRow>
            {columns.map((_, index) => (
                <TableCell key={index}>
                    <Skeleton className="h-4 w-full" />
                </TableCell>
            ))}
        </TableRow>
    );

    // Determine if we should show loading state
    const showLoading = loading || isFilterLoading;

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Organization Management</CardTitle>
                <div className="flex items-center justify-between">
                    {" "}
                    <div className="flex items-center space-x-2">
                        {loading ? (
                            <Skeleton className="h-10 w-64" />
                        ) : (
                            <Input
                                placeholder="Search all columns..."
                                value={globalFilter ?? ""}
                                onChange={(event) =>
                                    handleGlobalFilter(event.target.value)
                                }
                                className="max-w-sm"
                            />
                        )}
                    </div>
                    <Button
                        variant="outline"
                        onClick={resetTableState}
                        size="sm"
                        disabled={loading}
                    >
                        <RotateCcw className="mr-2 h-4 w-4" />
                        Reset Filters
                    </Button>
                </div>{" "}
                <div className="flex flex-wrap gap-2">
                    {loading ? (
                        <>
                            <Skeleton className="h-8 w-24" />
                            <Skeleton className="h-8 w-24" />
                            <Skeleton className="h-8 w-28" />
                        </>
                    ) : (
                        <>
                            <DataTableColumnFilter
                                title="Country"
                                options={countryOptions}
                                selectedValues={countryFilterValue}
                                onSelectionChange={handleCountryFilter}
                            />
                            <DataTableColumnFilter
                                title="Industry"
                                options={industryOptions}
                                selectedValues={industryFilterValue}
                                onSelectionChange={handleIndustryFilter}
                            />
                            <DataTableColumnFilter
                                title="Founded Year"
                                options={foundedYearOptions}
                                selectedValues={foundedFilterValue}
                                onSelectionChange={handleFoundedFilter}
                            />
                        </>
                    )}
                </div>
            </CardHeader>
            <CardContent>
                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                      header.column.columnDef
                                                          .header,
                                                      header.getContext()
                                                  )}
                                        </TableHead>
                                    ))}
                                </TableRow>
                            ))}
                        </TableHeader>{" "}
                        <TableBody>
                            {showLoading ? (
                                Array.from({ length: 5 }).map((_, index) => (
                                    <SkeletonRow key={`skeleton-${index}`} />
                                ))
                            ) : table.getRowModel().rows?.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        data-state={
                                            row.getIsSelected() && "selected"
                                        }
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={columns.length}
                                        className="h-24 text-center"
                                    >
                                        No results.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>{" "}
                <div className="flex items-center justify-between space-x-2 py-4">
                    <div className="text-sm text-muted-foreground">
                        {showLoading ? (
                            <Skeleton className="h-4 w-32" />
                        ) : (
                            `Showing ${table.getRowModel().rows.length} of ${table.getFilteredRowModel().rows.length} results`
                        )}
                    </div>
                    <div className="flex items-center space-x-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.previousPage()}
                            disabled={
                                !table.getCanPreviousPage() || showLoading
                            }
                        >
                            <ChevronLeft className="h-4 w-4" />
                            Previous
                        </Button>
                        <div className="flex items-center space-x-1">
                            {showLoading ? (
                                <Skeleton className="h-4 w-20" />
                            ) : (
                                <span className="text-sm font-medium">
                                    Page{" "}
                                    {table.getState().pagination.pageIndex + 1}{" "}
                                    of {table.getPageCount()}
                                </span>
                            )}
                        </div>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage() || showLoading}
                        >
                            Next
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
