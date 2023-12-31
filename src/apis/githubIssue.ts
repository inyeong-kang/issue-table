import { GitHubIssue, IssueSort, IssueState } from '@/types/githubIssue';
import { getFetch } from '@utils/fetch';

const API_BASE_URL = 'https://api.github.com';

export const ISSUE_LIST_PER_PAGE = 10;
const REPO_NAME = 'facebook/react';

const getIssueList = async (page: number, state: IssueState, sort: IssueSort): Promise<GitHubIssue[]> => {
    const response = await getFetch<GitHubIssue[]>(
        `${API_BASE_URL}/repos/${REPO_NAME}/issues?page=${page}&state=${state}&sort=${sort}&per_page=${ISSUE_LIST_PER_PAGE}`
    );
    return response;
};

export { getIssueList };
