import { FC } from "react";

import styles from "./index.module.scss";

export const App: FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>App</div>
        </div>
    );
};
