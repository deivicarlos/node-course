import { createRoot } from 'react-dom/client';
import './styles/styles.css';
import App from './components/App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);
const qc = new QueryClient();

root.render(
  <QueryClientProvider client={qc}>
    <App />
  </QueryClientProvider>,
);
