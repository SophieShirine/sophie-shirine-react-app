
import React from 'react';
import AboutComponent from './components/pages/about/about-page-component';
import ProjectsComponent from './components/pages/projects/projects-page-component';
import {Route, Routes} from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import data from '../package.json';

function AppRouter() {
    const homePath = data.name + '/';
    const projectPath = data.name + '/projects';

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={homePath} element={<AboutComponent />} />
                <Route exact path={projectPath} element={<ProjectsComponent />} />
            </Routes>
        </BrowserRouter>
    );
  }

export default AppRouter;