// Data table types
export interface Organization {
    index: number;
    organizationId: string;
    name: string;
    website: string;
    country: string;
    description: string;
    founded: number;
    industry: string;
    numberOfEmployees: number;
}

export interface TableState {
    sorting: {
        id: string;
        desc: boolean;
    }[];
    columnFilters: {
        id: string;
        value: any;
    }[];
    pagination: {
        pageIndex: number;
        pageSize: number;
    };
}

export interface FilterOption {
    value: string;
    label: string;
}
