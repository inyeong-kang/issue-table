import IssueTable from '.';
import { MOCK_ISSUE_LIST } from '@/mocks/issueList';

const meta = {
    component: IssueTable,
};

export default meta;

export const Default = () => {
    return <IssueTable data={MOCK_ISSUE_LIST} />;
};
