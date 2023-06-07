import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { PATH } from "../constants/paths";
import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";


export const router = createBrowserRouter([
    {
        path: PATH.home,
        element: <App />,
        children: [
            {
                path: PATH.home,
                element: <Home />
            },
            {
                path: PATH.about,
                element: <About />
            },
            {
                path: PATH.skills,
                element: <Skills />
            },
            {
                path: PATH.projects,
                element: <Projects />
            }
        ]
    }
])