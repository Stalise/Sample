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
    CallbackCheck,
} from "containers";

import { CheckError } from "../../check";

export const HomePage: FC = () => (
    <Fragment>
        {/* <CheckError /> */}
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
        {/* <CallbackCheck /> */}
    </Fragment>
);
