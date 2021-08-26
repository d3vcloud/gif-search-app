import { FavoriteProvider } from './components/Contexts/FavoriteContext';
import { ThemeProvider } from './components/Contexts/ThemeContext';
import Navigation from './components/UI/Navigation/Navigation';

import 'bootstrap/dist/css/bootstrap.min.css';

function GifApp() {
  return (
    <ThemeProvider>
      <FavoriteProvider>
        <Navigation />
      </FavoriteProvider>
    </ThemeProvider>
  );
}

export default GifApp;
