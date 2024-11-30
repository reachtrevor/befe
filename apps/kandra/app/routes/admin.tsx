import type { LinksFunction } from '@remix-run/node';

import stylesUrl from '../styles/admin.css';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }];
};
export default function Admin() {
  return <p>Admin works!</p>;
}
