import { Navigate, useLocation } from 'react-router';
import { AdminRoutes } from './AdminRoutes';
import { PrivateRoutes } from './PrivateRoutes';

export function PrivateResolver() {
  const location = useLocation();
  const isAthenticated = true;
  const accountType = 'admin';

  if (!isAthenticated) {
    return <Navigate to="/login" />;
  }

  if (accountType === 'admin') {
    return <AdminRoutes />;
  }

  return <PrivateRoutes />;
}
