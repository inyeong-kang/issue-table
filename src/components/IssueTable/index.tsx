import { Link } from 'react-router-dom';

import useSort from '@/hooks/useSort';
import Table from '@/components/common/Table';
import { GitHubIssue } from '@/types/githubIssue';

interface Props {
    data: GitHubIssue[];
}

const IssueTable = ({ data }: Props) => {
    const { onSort, sortedItems, sortDir, sortKey } = useSort({ data });
    return (
        <Table>
            <Table.Header
                onSort={onSort}
                sortDir={sortDir}
                sortKey={sortKey}
                isSortableHeader
                styles={{ backgroundColor: '#F5F8FA' }}
            >
                <Table.Column id="id">번호</Table.Column>
                <Table.Column id="title" styles={{ textAlign: 'start', paddingLeft: '6px' }}>
                    제목
                </Table.Column>
                <Table.Column id="login" styles={{ textAlign: 'start', paddingLeft: '6px' }}>
                    작성자
                </Table.Column>
                <Table.Column id="created_at">작성일</Table.Column>
                <Table.Column id="updated_at">수정일</Table.Column>
                <Table.Column id="comments">코멘트 수</Table.Column>
            </Table.Header>

            <Table.Body>
                {sortedItems.map((item, idx) => (
                    <Table.Row key={item.id}>
                        <Table.Cell styles={{ textAlign: 'center' }}>{idx + 1}</Table.Cell>
                        <Table.Cell>
                            <Link to={item.html_url}>{item.title}</Link>
                        </Table.Cell>
                        <Table.Cell>{item.user.login}</Table.Cell>
                        <Table.Cell>{item.created_at.slice(0, 10)}</Table.Cell>
                        <Table.Cell>{item.updated_at.slice(0, 10)}</Table.Cell>
                        <Table.Cell styles={{ textAlign: 'end' }}>{item.comments}</Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    );
};

export default IssueTable;
