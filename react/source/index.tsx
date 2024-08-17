import ReactDOM from "react-dom/client";

import { App } from "components/app";

import "assest/null.css";
import "assest/globals.scss";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLDivElement
);

root.render(<App />);
