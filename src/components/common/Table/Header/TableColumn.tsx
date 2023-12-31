import React, { CSSProperties } from 'react';
import styled from 'styled-components';

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

    return <Th style={styles}>{children}</Th>;
};

const Th = styled.th`
    color: #5a6066;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
    padding: 10px 7px;
`;

export default TableColumn;
