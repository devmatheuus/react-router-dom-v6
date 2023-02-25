import './styles/global.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { About } from './Components/About';
import { Home } from './Components/Home';
import { Menu } from './Components/Menu';
import { NotFound } from './Components/NotFound';
import { Post } from './Components/Post';
import { Redirect } from './Components/Redirect';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/posts" element={<Post />} />
        <Route path="/redirect" element={<Redirect />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
