import { atom, map } from "nanostores";
import type { TableState } from "@/types";

const defaultTableState: TableState = {
    sorting: [],
    columnFilters: [],
    pagination: {
        pageIndex: 0,
        pageSize: 10,
    },
};

const loadStateFromStorage = (): TableState => {
    if (typeof window === "undefined") return defaultTableState;

    try {
        const stored = localStorage.getItem("dataTableState");
        return stored
            ? { ...defaultTableState, ...JSON.parse(stored) }
            : defaultTableState;
    } catch {
        return defaultTableState;
    }
};

// Create persistent store
export const tableStateStore = map<TableState>(loadStateFromStorage());

// Save to localStorage whenever state changes
tableStateStore.subscribe((state) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("dataTableState", JSON.stringify(state));
    }
});

// Action creators
export const updateSorting = (sorting: TableState["sorting"]) => {
    tableStateStore.setKey("sorting", sorting);
};

export const updateColumnFilters = (
    columnFilters: TableState["columnFilters"]
) => {
    tableStateStore.setKey("columnFilters", columnFilters);
};

export const updatePagination = (pagination: TableState["pagination"]) => {
    tableStateStore.setKey("pagination", pagination);
};

export const resetTableState = () => {
    tableStateStore.set(defaultTableState);
};
