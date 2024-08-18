import { FC, Fragment, StrictMode } from "react";

import { MyContextProvider } from "context/my-context/my-context-provider";
import {
    ProfilerCheck,
    StrictModeCheck,
    ContextCheck,
    RefCheck,
    EffectsCheck,
    RenderPropCheck,
    FetchCheck,
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
        {/* <EffectsCheck /> */}
        {/* <RenderPropCheck
            render={(value) => (
                <span>Value {value > 5 ? "greater" : "less"} than 5</span>
            )}
        /> */}
        {/* <FetchCheck /> */}
    </Fragment>
);
