import { Fragment, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { getIssueList, getSearchIssue } from '@/apis/githubIssue';
import IssueTable from '@components/IssueTable';
import Pagination from '@/components/common/Pagination';
import Chip from '@/components/common/Chip';
import { FilterOption, STATE_OPTION, SORT_OPTION } from '@/types/githubIssue';
import blueArrow from '@/assets/arrow_down_blue.svg';
import grayArrow from '@/assets/arrow_down_gray.svg';

import * as S from './style';

interface Props {
    filterOptions: FilterOption;
    onFilterChange: <K extends keyof FilterOption>(key: K, value: FilterOption[K]) => void;
}

const SHOW_PAGE = 10;

export default function IssueListFetcher({ filterOptions, onFilterChange }: Props) {
    const { state, sort } = filterOptions;

    const [currentPage, setCurrentPage] = useState(1);

    const { data: totalAmount } = useQuery(['searched-issuse-amount'], () => getSearchIssue(state), {
        suspense: true,
    });

    const { data: issueList } = useQuery(
        ['issue-list', currentPage, state, sort],
        () => getIssueList(currentPage, state, sort),
        {
            suspense: true,
        }
    );

    const handlePageButtonClick = (newPage: number) => {
        setCurrentPage(newPage);
    };

    return (
        <Fragment>
            {issueList && (
                <Fragment>
                    <S.FilterChipContainer>
                        <Chip onClick={() => alert('click to open modal')}>
                            {state === 'all' ? (
                                <>
                                    <span> 이슈 상태 </span> <img src={grayArrow} />
                                </>
                            ) : (
                                <>
                                    <span style={{ color: '#1A8CFF' }}>{STATE_OPTION[state]}</span>
                                    <img src={blueArrow} />
                                </>
                            )}
                        </Chip>
                        <Chip onClick={() => alert('click to open modal')}>
                            <span>{SORT_OPTION[sort]}</span>
                            <img src={grayArrow} />
                        </Chip>
                    </S.FilterChipContainer>
                    <IssueTable data={issueList} />
                    <Pagination
                        show={SHOW_PAGE}
                        total={totalAmount ? Math.ceil(totalAmount / SHOW_PAGE) : 0}
                        current={currentPage}
                        onPageClick={handlePageButtonClick}
                        styles={{ marginTop: '24px' }}
                    />
                </Fragment>
            )}
        </Fragment>
    );
}
