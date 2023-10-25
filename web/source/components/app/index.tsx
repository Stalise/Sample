import { FC } from "react";

import { MyContextProvider } from "context/my-context-provider";

import { ContextCheck } from "containers/context-check";

import styles from "./index.module.scss";

export const App: FC = () => (
    <MyContextProvider>
        <div className={styles.wrapper}>
            <div className={styles.title}>App</div>
            {/* <ContextCheck /> */}
        </div>
    </MyContextProvider>
);
