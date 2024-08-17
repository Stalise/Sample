import { createContext } from 'react';

export type MyContextType = {
    value: number;
    setValue: (newValue: number) => void;
};

export const MyContext = createContext<null | MyContextType>(null);
