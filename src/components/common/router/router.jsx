import { createBrowserRouter } from "react-router-dom";

import Index from "../../pages/index/Index";
import Portfolio from "../../pages/portfolio/Portfolio";
import NotFound from "../../pages/404/404";
import Subpage from "./Subpage";

const router = createBrowserRouter([
    { path: "", element: <Index />},
    { path: "/", element: <Subpage />, children: [
        { path: "portfolio", element: <Portfolio /> },
    ]},
    { path: "*", element: <NotFound /> },
]);

export default router;
