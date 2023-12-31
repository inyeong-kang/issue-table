import { useState } from 'react';
import Dialog from '.';
import { IssueState, STATE_OPTION } from '@/types/githubIssue';
import styled from 'styled-components';
import Chip from '../Chip';

const meta = {
    component: Dialog,
};

export default meta;

export const IssueOptionModal = () => {
    const [isOpen, setOpen] = useState(false);
    const [stateChip, setStateChip] = useState<IssueState>('all');

    return (
        <div>
            <p>현재 옵션: {STATE_OPTION[stateChip]}</p>
            <button onClick={() => setOpen(true)}>모달 열기</button>
            <Dialog open={isOpen} onOpenChange={setOpen}>
                <Dialog.BackDrop />
                <Dialog.Content styles={{ padding: '20px 15px 20px 20px' }}>
                    <Dialog.Title>이슈 상태</Dialog.Title>
                    <Dialog.Body styles={{ marginTop: '15px' }}>
                        <StateChipContainer>
                            {Object.entries(STATE_OPTION).map(([key, value]) => {
                                return (
                                    <Chip
                                        key={key}
                                        onClick={() => setStateChip(key as IssueState)}
                                        styles={{
                                            color: stateChip === (key as IssueState) ? 'white' : 'black',

                                            backgroundColor: stateChip === (key as IssueState) ? '#1A8CFF' : 'white',
                                        }}
                                    >
                                        <span>{value}</span>
                                    </Chip>
                                );
                            })}
                        </StateChipContainer>
                    </Dialog.Body>
                    <Dialog.CTAButton isButtonToClose={false} action={() => alert('clicked')}>
                        적 용
                    </Dialog.CTAButton>
                </Dialog.Content>
            </Dialog>
        </div>
    );
};

const StateChipContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 8px;

    width: 100%;

    margin-bottom: 24px;
`;
