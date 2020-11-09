import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Painel from './components/Painel';

function MainRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="/painel" element={<Painel />} />
        <Route path="/config" element={<h1>Cofigurações</h1>} />
      </Route>
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}

export default MainRoutes;