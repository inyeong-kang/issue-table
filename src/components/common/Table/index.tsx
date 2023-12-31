import React from 'react';
import { TableBody, TableCell, TableRow } from './Body/TableBody';
import TableColumn from './Header/TableColumn';
import TableHeader from './Header/TableHeader';

interface Props {
    children: React.ReactNode;
    className?: string;
}

const Table = ({ children, className }: Props) => {
    return <table className={className}>{children}</table>;
};

export default Table;

Table.Header = TableHeader;
Table.Column = TableColumn;
Table.Body = TableBody;
Table.Cell = TableCell;
Table.Row = TableRow;
