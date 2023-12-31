import { CSSProperties, PropsWithChildren } from 'react';
import styled from 'styled-components';

interface Props extends PropsWithChildren {
    onClick: () => void;
    styles?: CSSProperties;
}

export default function Chip({ onClick, styles, children }: Props) {
    return (
        <Button onClick={onClick} style={styles}>
            {children}
        </Button>
    );
}

const Button = styled.button`
    display: flex;
    padding: 8px 12px;
    align-items: center;
    gap: 4px;

    border-radius: 32px;
    border: 1px solid var(--Grayscale-Border, #dfe5eb);
    background-color: var(--white);
`;
