import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "pages/home";
import { TestPage } from "pages/test";
import { Layout } from "components/common/layout";

export const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="test" element={<TestPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
