import { CSSProperties, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

import DialogProvider, { useDialogContext } from './context';
import { DefaultBackDrop, CloseButton, ModalContainer, TitleWrapper, BodyWrapper, MainButton } from './style';

export interface DialogProps extends PropsWithChildren {
    open?: boolean;
    defaultOpen?: boolean;
    scroll?: boolean;
    onOpenChange?: (open: boolean) => void;
}

interface PortalProps {
    container?: HTMLElement;
}

const Dialog = (props: DialogProps) => {
    const { children, ...restProps } = props;

    return <DialogProvider value={restProps}>{children}</DialogProvider>;
};

const Portal = (props: PropsWithChildren<PortalProps>) => {
    const { isOpened } = useDialogContext();

    return isOpened ? createPortal(props.children, document.body) : null;
};

const BackDrop = (props: PropsWithChildren<{ styles?: CSSProperties }>) => {
    const { isOpened, openHandler } = useDialogContext();

    return isOpened && <DefaultBackDrop style={props.styles} onClick={openHandler} />;
};

const Content = (props: PropsWithChildren<{ styles?: CSSProperties }>) => {
    const { children, styles, ...restProps } = props;

    return (
        <ModalContainer style={styles} {...restProps}>
            {children}
        </ModalContainer>
    );
};

const Close = (props: PropsWithChildren<{ styles?: CSSProperties }>) => {
    const { children, styles } = props;
    const { isOpened, openHandler } = useDialogContext();
    return (
        <>
            {isOpened && (
                <div style={styles}>
                    <CloseButton type="button" onClick={openHandler}>
                        {children}
                    </CloseButton>
                </div>
            )}
        </>
    );
};

interface CTAButtonProps extends PropsWithChildren {
    styles?: CSSProperties;
    action: () => void;
    isButtonToClose: boolean;
}

const CTAButton = (props: CTAButtonProps) => {
    const { children, styles, action, isButtonToClose = false } = props;
    const { isOpened, openHandler } = useDialogContext();

    return (
        <>
            {isOpened && (
                <MainButton
                    type="button"
                    onClick={
                        isButtonToClose
                            ? openHandler
                            : () => {
                                  action();
                                  openHandler();
                              }
                    }
                    style={styles}
                >
                    {children}
                </MainButton>
            )}
        </>
    );
};

const Header = (props: PropsWithChildren<{ styles?: CSSProperties }>) => {
    const { children, styles } = props;
    const { isOpened } = useDialogContext();

    return <>{isOpened && <div style={styles}>{children}</div>}</>;
};

const Title = (props: PropsWithChildren<{ styles?: CSSProperties }>) => {
    const { children, styles } = props;
    const { isOpened } = useDialogContext();

    return <>{isOpened && <TitleWrapper style={styles}>{children}</TitleWrapper>}</>;
};

const Body = (props: PropsWithChildren<{ styles?: CSSProperties }>) => {
    const { children, styles } = props;
    const { isOpened } = useDialogContext();

    return <>{isOpened && <BodyWrapper style={styles}>{children}</BodyWrapper>}</>;
};

const Footer = (props: PropsWithChildren<{ styles?: CSSProperties }>) => {
    const { children, styles } = props;
    const { isOpened } = useDialogContext();

    return <>{isOpened && <div style={styles}>{children}</div>}</>;
};

Dialog.Portal = Portal;
Dialog.BackDrop = BackDrop;
Dialog.Header = Header;
Dialog.Title = Title;
Dialog.Body = Body;
Dialog.Content = Content;
Dialog.Close = Close;
Dialog.CTAButton = CTAButton;
Dialog.Footer = Footer;

export { Dialog };
