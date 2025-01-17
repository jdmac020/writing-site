import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { MainLayout } from './MainLayout';
import { TableOfContents } from './TableOfContents';
import { NotFound } from './NotFound';
import { About } from './About';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path={'/stories'} element={<TableOfContents />} />
            <Route path={'/about'} element={<About />} />
            <Route path={'*'} element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}