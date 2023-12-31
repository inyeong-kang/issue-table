import { useCallback, useState } from 'react';

const useBoolean = (init = false): [boolean, VoidFunction, VoidFunction, VoidFunction] => {
    const [boolean, setBoolean] = useState(init);

    const setTrue = useCallback(() => setBoolean(true), []);
    const setFalse = useCallback(() => setBoolean(false), []);
    const toggle = useCallback(() => setBoolean((prev) => !prev), []);

    return [boolean, setTrue, setFalse, toggle];
};

export default useBoolean;
