import { HelmetProvider } from 'react-helmet-async';
import LandingPage from './pages/LandingPage';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <LandingPage />
    </HelmetProvider>
  );
}

export default App;
