import { Fragment, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { getIssueList, getSearchIssue } from '@/apis/githubIssue';
import IssueTable from '@components/IssueTable';
import Pagination from '@/components/common/Pagination';
import Chip from '@/components/common/Chip';
import Dialog from '@components/common/Dialog';

import { FilterOption, STATE_OPTION, SORT_OPTION, IssueState, IssueSort } from '@/types/githubIssue';

import blueArrow from '@/assets/arrow_down_blue.svg';
import grayArrow from '@/assets/arrow_down_gray.svg';
import checkIcon from '@/assets/blue-check.svg';

import * as S from './style';

interface Props {
    filterOptions: FilterOption;
    onFilterChange: <K extends keyof FilterOption>(key: K, value: FilterOption[K]) => void;
}

const SHOW_PAGE = 10;

export default function IssueListFetcher({ filterOptions, onFilterChange }: Props) {
    const { state, sort } = filterOptions;

    const [currentPage, setCurrentPage] = useState(1);

    const [stateChip, setStateChip] = useState<IssueState>(state);
    const [sortChip, setSortChip] = useState<IssueSort>(sort);

    const [isStateModalOpen, setStateModalOpen] = useState(false);
    const [isSortModalOpen, setSortModalOpen] = useState(false);

    const handleModalOpen = (option: keyof FilterOption) => {
        if (option === 'state') {
            setStateModalOpen(true);
            return;
        }
        setSortModalOpen(true);
    };

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
                        <Chip onClick={() => handleModalOpen('state')}>
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
                        <Chip onClick={() => handleModalOpen('sort')}>
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
                    {isStateModalOpen && (
                        <Dialog open={isStateModalOpen} onOpenChange={setStateModalOpen}>
                            <Dialog.BackDrop />
                            <Dialog.Content styles={{ padding: '20px 15px 20px 20px' }}>
                                <Dialog.Title>이슈 상태</Dialog.Title>
                                <Dialog.Body styles={{ marginTop: '15px' }}>
                                    <S.StateChipContainer>
                                        {Object.entries(STATE_OPTION).map(([key, value]) => {
                                            return (
                                                <Chip
                                                    key={key}
                                                    onClick={() => setStateChip(key as IssueState)}
                                                    styles={{
                                                        color: stateChip === (key as IssueState) ? 'white' : 'black',

                                                        backgroundColor:
                                                            stateChip === (key as IssueState) ? '#1A8CFF' : 'white',
                                                    }}
                                                >
                                                    <span>{value}</span>
                                                </Chip>
                                            );
                                        })}
                                    </S.StateChipContainer>
                                </Dialog.Body>
                                <Dialog.CTAButton
                                    isButtonToClose={false}
                                    action={() => onFilterChange('state', stateChip)}
                                >
                                    적 용
                                </Dialog.CTAButton>
                            </Dialog.Content>
                        </Dialog>
                    )}
                    {isSortModalOpen && (
                        <Dialog open={isSortModalOpen} onOpenChange={setSortModalOpen}>
                            <Dialog.BackDrop />
                            <Dialog.Content styles={{ padding: '20px 15px 10px 20px' }}>
                                <Dialog.Title>정렬</Dialog.Title>
                                <Dialog.Body styles={{ margin: '20px 0' }}>
                                    <S.SortListContainer>
                                        {Object.entries(SORT_OPTION).map(([key, value]) => {
                                            return (
                                                <S.SortBox
                                                    key={key}
                                                    onClick={() => {
                                                        setSortChip(key as IssueSort);
                                                        onFilterChange('sort', key as IssueSort);
                                                    }}
                                                >
                                                    <span>{value}</span>
                                                    {sortChip === (key as IssueSort) && <img src={checkIcon} />}
                                                </S.SortBox>
                                            );
                                        })}
                                    </S.SortListContainer>
                                </Dialog.Body>
                            </Dialog.Content>
                        </Dialog>
                    )}
                </Fragment>
            )}
        </Fragment>
    );
}
