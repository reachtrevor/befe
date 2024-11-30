import { Route, Routes } from 'react-router';
import { PrivateResolver } from './private/PrivateResolver';
import { PublicRoutes } from './public/PublicRoutes';

export function AppRouteResolver() {
  return (
    <Routes>
      <Route path="/admin/*" element={<PrivateResolver />} />
      <Route path="/console/*" element={<PrivateResolver />} />
      <Route path="/*" element={<PublicRoutes />} />
    </Routes>
  );
}
