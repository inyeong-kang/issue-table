import { CSSProperties, useState } from 'react';
import * as S from './style';

import { ISSUE_LIST_PER_PAGE } from '@/apis/githubIssue';

interface Props {
    show: number;
    total: number;
    current: number;
    onPageClick: (page: number) => void;
    styles?: CSSProperties;
}

const generateNumberArray = (start: number, show: number, limit: number): number[] => {
    return Array.from({ length: show }, (_, index) => start + index).filter((number) => number <= limit);
};

export default function Pagination({ show, total, current, onPageClick, styles }: Props) {
    const [showPages, setShowPages] = useState<number[]>(generateNumberArray(1, show, total));

    const handlePrevClick = () => {
        if ((current - 1) % ISSUE_LIST_PER_PAGE === 0) {
            setShowPages(generateNumberArray(current - ISSUE_LIST_PER_PAGE, ISSUE_LIST_PER_PAGE, total));
        }
        onPageClick(current - 1);
    };

    const handleNextClick = () => {
        if (current % ISSUE_LIST_PER_PAGE === 0) {
            setShowPages(generateNumberArray(current + 1, ISSUE_LIST_PER_PAGE, total));
        }
        onPageClick(current + 1);
    };

    return (
        <S.PageButtonList style={styles}>
            <S.PageButton onClick={handlePrevClick} $isSelected={false} disabled={current === 1}>
                &#60;
            </S.PageButton>
            {showPages.map((page) => {
                return (
                    <S.PageButton key={page} onClick={() => onPageClick(page)} $isSelected={page === current}>
                        {page}
                    </S.PageButton>
                );
            })}
            <S.PageButton onClick={handleNextClick} $isSelected={false} disabled={current === total}>
                &#62;
            </S.PageButton>
        </S.PageButtonList>
    );
}
