import { FC, ReactNode } from "react";

import { MyContextType, MyContext } from "./my-context";

type PropsType = { children: ReactNode };

export const MyContextProvider: FC<PropsType> = ({ children }) => {
    const context: MyContextType = {
        value: 5,
        // данная реализация не даёт перерендер компонента, чтобы показать нужное value на UI
        // Чтобы добиться этого, нужно делать через useState
        setValue: function (newValue) {
            this.value = newValue;
        },
    };

    return <MyContext.Provider value={context}>{children}</MyContext.Provider>;
};
