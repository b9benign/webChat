import React from "react";
import { Route } from "react-router-dom";
import HomePage from "../../pages/home/HomePage";
import UnderConstructionPage from "../../pages/under-construction/UnderConstructionPage";
import { ABOUT_ROOT, HOME_ROOT } from "./miscRouterConstants";

export default function getMiscRouter(): React.JSX.Element {
    return (
        <React.Fragment>
            <Route path={HOME_ROOT} element={<HomePage />} />
            <Route path={ABOUT_ROOT} element={<UnderConstructionPage />} />
        </React.Fragment>
    )
}