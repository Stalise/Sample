import { FC } from "react";
import { Outlet } from "react-router-dom";

import s from "./index.module.scss";

export const Layout: FC = () => (
    <div className={s.wrapper}>
        <Outlet />
    </div>
);
