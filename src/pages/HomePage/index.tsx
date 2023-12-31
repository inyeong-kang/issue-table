import { Suspense, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import * as S from './style';
import Skeleton from '@components/common/Skeleton';
import { FilterOption } from '@/types/githubIssue';
import ErrorFallback from '@components/common/ErrorFallback';
import IssueListFetcher from './IssueListFetcher';

export default function HomePage() {
    const [filterOptions, setFilterOptions] = useState<FilterOption>({
        state: 'all',
        sort: 'created',
    });

    const handleFilterChange = <K extends keyof FilterOption>(key: K, value: FilterOption[K]): void => {
        console.log(key, value);
        setFilterOptions({
            ...filterOptions,
            [key]: value,
        });
    };

    return (
        <S.MainWrapper>
            <S.Section>
                <S.PageTitle>이슈정리</S.PageTitle>
                <S.TableWrapper>
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                        <Suspense
                            fallback={
                                <S.SkeletonWrapper>
                                    <Skeleton />
                                </S.SkeletonWrapper>
                            }
                        >
                            <IssueListFetcher filterOptions={filterOptions} onFilterChange={handleFilterChange} />
                        </Suspense>
                    </ErrorBoundary>
                </S.TableWrapper>
            </S.Section>
        </S.MainWrapper>
    );
}
