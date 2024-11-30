import { Route, Routes } from 'react-router';
import { DefaultPrivateLayout } from './layouts/DefaultPrivateLayout';

export function AdminRoutes() {
  return (
    <DefaultPrivateLayout>
      <Routes>
        <Route path="/" element={<h1>Admin Dashboard</h1>} />
        <Route path="settings/*" element={<h1>Settings</h1>} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </DefaultPrivateLayout>
  );
}
