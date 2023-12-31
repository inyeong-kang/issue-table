import { ISSUE_LIST_PER_PAGE } from '@/constants/page';
import { GitHubIssue, IssueSearch, IssueSort, IssueState } from '@/types/githubIssue';
import { getFetch } from '@utils/fetch';

const API_BASE_URL = 'https://api.github.com';

const REPO_NAME = 'facebook/react';

const getIssueList = async (page: number, state: IssueState, sort: IssueSort): Promise<GitHubIssue[]> => {
    const response = await getFetch<GitHubIssue[]>(
        `${API_BASE_URL}/repos/${REPO_NAME}/issues?page=${page}&state=${state}&sort=${sort}&per_page=${ISSUE_LIST_PER_PAGE}`
    );
    return response;
};

const getSearchIssue = async (state: IssueState): Promise<number> => {
    if (state === 'all') {
        const response = await getFetch<IssueSearch>(`${API_BASE_URL}/search/issues?q=repo:facebook/react+type:issue`);

        return response.total_count;
    }
    const response = await getFetch<IssueSearch>(
        `${API_BASE_URL}/search/issues?q=repo:${REPO_NAME}+type:issue+state:${state}`
    );
    return response.total_count;
};

export { getIssueList, getSearchIssue };
