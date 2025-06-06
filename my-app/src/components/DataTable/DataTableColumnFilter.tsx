import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { X, Filter } from "lucide-react";
import type { FilterOption } from "@/types";

interface DataTableColumnFilterProps {
    title: string;
    options: FilterOption[];
    selectedValues: string[];
    onSelectionChange: (values: string[]) => void;
}

export function DataTableColumnFilter({
    title,
    options,
    selectedValues,
    onSelectionChange,
}: DataTableColumnFilterProps) {
    const handleValueToggle = (value: string) => {
        const newValues = selectedValues.includes(value)
            ? selectedValues.filter((v) => v !== value)
            : [...selectedValues, value];
        onSelectionChange(newValues);
    };

    const clearFilter = () => {
        onSelectionChange([]);
    };

    return (
        <div className="flex items-center space-x-2">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        size="sm"
                        className="h-8 border-dashed"
                    >
                        <Filter className="mr-2 h-4 w-4" />
                        {title}
                        {selectedValues.length > 0 && (
                            <Badge
                                variant="secondary"
                                className="ml-2 rounded-sm px-1 font-normal"
                            >
                                {selectedValues.length}
                            </Badge>
                        )}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[200px]" align="start">
                    {options.map((option) => (
                        <DropdownMenuCheckboxItem
                            key={option.value}
                            checked={selectedValues.includes(option.value)}
                            onCheckedChange={() =>
                                handleValueToggle(option.value)
                            }
                        >
                            {option.label}
                        </DropdownMenuCheckboxItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
            {selectedValues.length > 0 && (
                <Button
                    variant="ghost"
                    onClick={clearFilter}
                    className="h-8 px-2 lg:px-3"
                >
                    Reset
                    <X className="ml-2 h-4 w-4" />
                </Button>
            )}
        </div>
    );
}
