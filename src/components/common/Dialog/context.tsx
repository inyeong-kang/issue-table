import { InputHTMLAttributes, PropsWithChildren, createContext, useCallback, useEffect, useMemo } from 'react';

import useContextInScope from '@/hooks/useContextInScope';
import useBoolean from '@/hooks/useBoolean';
import { DialogProps } from '.';

const preventScroll = (opened: boolean) => {
    document.body.style.overflow = opened ? 'hidden' : 'auto';
};

interface DialogContext extends InputHTMLAttributes<HTMLDivElement> {
    isOpened: boolean;
    inScope: boolean;
    openHandler: VoidFunction;
}

interface DialogProviderProps {
    value: DialogProps;
}

const DialogContext = createContext({
    isOpened: false,
    inScope: false,
    openHandler() {},
});

DialogContext.displayName = 'Dialog';

export const useDialogContext = () => useContextInScope(DialogContext);

const DialogProvider = (props: PropsWithChildren<DialogProviderProps>) => {
    const {
        value: { open, defaultOpen, scroll = false, onOpenChange },
        children,
    } = props;
    const { isOpened, openDialog, closeDialog } = useDialog(open ?? defaultOpen);

    const composedDialogState = open ?? isOpened;

    const openHandler = () => {
        isOpened ? closeDialog() : openDialog();
    };

    useEffect(() => {
        if (!scroll) preventScroll(composedDialogState);
    }, [scroll, composedDialogState]);

    useEffect(() => {
        onOpenChange?.(isOpened);
    }, [isOpened]);

    const memoizedValue = useMemo(
        () => ({
            isOpened: composedDialogState,
            inScope: true,
            openHandler,
        }),
        [composedDialogState]
    );

    return <DialogContext.Provider value={memoizedValue}>{children}</DialogContext.Provider>;
};

const useDialog = (opened: boolean = false) => {
    const [isOpened, openDialog, closeDialog] = useBoolean(opened);

    const closeWithEscape = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') closeDialog();
    }, []);

    useEffect(() => {
        isOpened
            ? document.addEventListener('keydown', closeWithEscape)
            : document.removeEventListener('keydown', closeWithEscape);

        return () => document.removeEventListener('keydown', closeWithEscape);
    }, [isOpened]);

    return { isOpened, openDialog, closeDialog, closeWithEscape };
};

export default DialogProvider;
