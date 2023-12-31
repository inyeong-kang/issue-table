export type SortingDirection = 'asc' | 'desc' | 'none';

export interface FilterOption {
    state: IssueState;
    sort: IssueSort;
}

export const STATE_OPTION = {
    all: '전체',
    open: 'open',
    closed: 'closed',
} as const;

export const SORT_OPTION = {
    created: '작성일 순',
    updated: '수정일 순',
    comments: '코멘트 순',
} as const;

export type IssueState = keyof typeof STATE_OPTION;

export type IssueSort = keyof typeof SORT_OPTION;

export interface GitHubIssue {
    id: number;
    node_id: string;
    url: string;
    repository_url: string;
    labels_url: string;
    comments_url: string;
    events_url: string;
    html_url: string;
    number: number;
    state: 'open' | 'closed';
    title: string;
    body: string;
    reactions: {
        url: string;
        total_count: number;
        '+1': number;
        '-1': number;
        laugh: number;
        hooray: number;
        confused: number;
        heart: number;
        rocket: number;
        eyes: number;
    };
    timeline_url: string | null;
    // performed_via_github_app: unknown;
    user: {
        login: string;
        id: number;
        node_id: string;
        avatar_url: string;
        gravatar_id: string;
        url: string;
        html_url: string;
        followers_url: string;
        following_url: string;
        gists_url: string;
        starred_url: string;
        subscriptions_url: string;
        organizations_url: string;
        repos_url: string;
        events_url: string;
        received_events_url: string;
        type: string;
        site_admin: boolean;
    };
    labels: [
        {
            id: number;
            node_id: string;
            url: string;
            name: string;
            description: string | null;
            color: string;
            default: boolean;
        }
    ];
    assignee: {
        login: string;
        id: number;
        node_id: string;
        avatar_url: string;
        gravatar_id: string;
        url: string;
        html_url: string;
        followers_url: string;
        following_url: string;
        gists_url: string;
        starred_url: string;
        subscriptions_url: string;
        organizations_url: string;
        repos_url: string;
        events_url: string;
        received_events_url: string;
        type: string;
        site_admin: boolean;
    } | null;
    assignees:
        | [
              {
                  login: string;
                  id: number;
                  node_id: string;
                  avatar_url: string;
                  gravatar_id: string;
                  url: string;
                  html_url: string;
                  followers_url: string;
                  following_url: string;
                  gists_url: string;
                  starred_url: string;
                  subscriptions_url: string;
                  organizations_url: string;
                  repos_url: string;
                  events_url: string;
                  received_events_url: string;
                  type: string;
                  site_admin: boolean;
              }
          ]
        | [];
    milestone: {
        url: string;
        html_url: string;
        labels_url: string;
        id: number;
        node_id: string;
        number: number;
        state: 'open' | 'closed';
        title: string;
        description: string;
        creator: {
            login: string;
            id: number;
            node_id: string;
            avatar_url: string;
            gravatar_id: string;
            url: string;
            html_url: string;
            followers_url: string;
            following_url: string;
            gists_url: string;
            starred_url: string;
            subscriptions_url: string;
            organizations_url: string;
            repos_url: string;
            events_url: string;
            received_events_url: string;
            type: string;
            site_admin: boolean;
        };
        open_issues: number;
        closed_issues: number;
        created_at: string;
        updated_at: string;
        closed_at: string;
        due_on: string;
    } | null;
    locked: boolean;
    active_lock_reason: string | null;
    draft?: boolean;
    comments: number;
    pull_request: {
        url: string;
        html_url: string;
        diff_url: string;
        patch_url: string;
        merged_at: string | null;
    };
    closed_at: string | null;
    created_at: string;
    updated_at: string;
    closed_by?: {
        login: string;
        id: number;
        node_id: string;
        avatar_url: string;
        gravatar_id: string;
        url: string;
        html_url: string;
        followers_url: string;
        following_url: string;
        gists_url: string;
        starred_url: string;
        subscriptions_url: string;
        organizations_url: string;
        repos_url: string;
        events_url: string;
        received_events_url: string;
        type: string;
        site_admin: boolean;
    };
    author_association: 'OWNER' | 'MEMBER' | 'COLLABORATOR' | 'CONTRIBUTOR' | 'NONE';
    state_reason: string | null;
}
