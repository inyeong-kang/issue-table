import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import { SortingDirection } from '@/types/githubIssue';

interface Props<T> {
    children: React.ReactNode;
    className?: string;
    isSortableHeader: boolean;
    styles?: CSSProperties;
    onSort: (sortKey: keyof T, sortDir?: SortingDirection) => void;
    rowClassName?: string;
    sortDir: SortingDirection;
    sortKey: keyof T;
}

const TableHeader = <T,>({
    children,
    styles,
    className,
    isSortableHeader,
    onSort,
    rowClassName,
    sortDir,
    sortKey,
}: Props<T>) => {
    const headerChildrens = isSortableHeader
        ? React.Children.map(children, (child) =>
              React.cloneElement(child as React.ReactElement<Props<T>>, {
                  onSort,
                  isSortableHeader,
                  sortKey,
                  sortDir,
              })
          )
        : children;
    return (
        <Head className={className} style={styles}>
            <tr className={rowClassName}>{headerChildrens}</tr>
        </Head>
    );
};

const Head = styled.thead`
    font: var(--text-body);
    background-color: var(--gray);
`;

export default TableHeader;
