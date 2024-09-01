import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { MainLayout } from './MainLayout';
import { TableOfContents } from './TableOfContents';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path={'/stories'} element={<TableOfContents />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}