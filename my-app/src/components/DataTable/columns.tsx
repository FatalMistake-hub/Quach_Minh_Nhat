import type { DataTableColumn } from "@/types";


const columns: DataTableColumn[] = [
  {
    Header: 'Name',
    accessor: 'name', // accessor is the "key" in the data
  },
  {
    Header: 'Age',
    accessor: 'age',
  },
  {
    Header: 'Email',
    accessor: 'email',
  },
  {
    Header: 'Country',
    accessor: 'country',
  },
];

export default columns;
