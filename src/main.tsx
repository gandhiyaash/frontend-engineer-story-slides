import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import PitchDeck from './components/PitchDeck.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PitchDeck />
  </StrictMode>
);
