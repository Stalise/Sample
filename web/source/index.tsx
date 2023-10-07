import ReactDOM from "react-dom/client";

import s from "./styles.module.css";
import { Component } from "components/component";

import "./null.css";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLDivElement
);

root.render(
    <div className="box">
        <p className={s.text}>Hello!!!</p>
        <Component />
    </div>
);
