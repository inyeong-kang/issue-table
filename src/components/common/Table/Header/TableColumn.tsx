import React, { CSSProperties } from 'react';

interface Props<T, U> {
    children: React.ReactElement | string;
    styles?: CSSProperties;
    id?: keyof T;
    isSortableHeader?: boolean;
    onSort?: (sortKey: keyof T) => T[];
    sortDir?: U;
    sortKey?: keyof T;
}

const TableColumn = <T, U>({ children, styles, id, isSortableHeader, sortDir, sortKey }: Props<T, U>) => {
    const isArrowVisible = isSortableHeader && sortKey === id && sortDir !== 'none';
    if (isArrowVisible) console.log(isArrowVisible);

    return <th style={styles}>{children}</th>;
};

export default TableColumn;
