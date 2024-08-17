import { useContext } from "react";

import { MyContext } from "./my-context";

export const useMyContext = () => {
    const context = useContext(MyContext);

    if (context === null) {
        throw new Error("useMyContext should use in MyContext.Provider");
    }

    return context;
};
