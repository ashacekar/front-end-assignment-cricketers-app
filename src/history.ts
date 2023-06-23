import { createBrowserHistory as createHistory } from 'history';

const { PUBLIC_URL } = process.env; // The value set in the homepage property of package.json is exposed in the process.env.PUBLIC_URL variable at build time.
export const history = createHistory({ basename: PUBLIC_URL });