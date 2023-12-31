import React, { CSSProperties } from 'react';
import { TableBody, TableCell, TableRow } from './Body/TableBody';
import TableColumn from './Header/TableColumn';
import TableHeader from './Header/TableHeader';
import styled from 'styled-components';

interface Props {
    children: React.ReactNode;
    className?: string;
    styles?: CSSProperties;
}

const Table = ({ children, className, styles }: Props) => {
    return (
        <Wrapper>
            <StyledTable className={className} style={styles}>
                {children}
            </StyledTable>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    overflow-x: auto;
    min-width: 500px;
    max-width: 1200px;
    width: 100%;
`;

const StyledTable = styled.table`
    width: 100%;
`;

export default Table;

Table.Header = TableHeader;
Table.Column = TableColumn;
Table.Body = TableBody;
Table.Cell = TableCell;
Table.Row = TableRow;
