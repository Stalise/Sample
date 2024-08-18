import { FC, Fragment, StrictMode } from "react";

import { MyContextProvider } from "context/my-context/my-context-provider";
import {
    ProfilerCheck,
    StrictModeCheck,
    ContextCheck,
    RefCheck,
} from "containers";

export const HomePage: FC = () => (
    <Fragment>
        {/* <ProfilerCheck /> */}
        {/* <StrictMode>
            <StrictModeCheck />
        </StrictMode> */}
        {/* <MyContextProvider>
            <ContextCheck />
        </MyContextProvider> */}
        {/* <RefCheck /> */}
    </Fragment>
);
