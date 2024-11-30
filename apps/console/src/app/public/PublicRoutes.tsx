import { Navigate, Route, Routes } from 'react-router';

import { PublicLayout } from './layouts/PublicLayout';

import EmailUnsubscribeView from './email/EmailUnsubscribe.view';
import LoginView from './views/Login.view';

export function PublicRoutes() {
  return (
    <PublicLayout>
      <Routes>
        <Route path="login" element={<LoginView />} />
        <Route path="signup" element={<h1>Sign Up</h1>} />
        <Route path="forgot-password" element={<h1>Forgot password</h1>} />
        <Route path="email-unsubscribe" element={<EmailUnsubscribeView />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </PublicLayout>
  );
}
