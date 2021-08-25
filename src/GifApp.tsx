import 'bootstrap/dist/css/bootstrap.min.css';
import FavoriteProvider from './components/Contexts/FavoriteProvider';
import ThemeProvider from './components/Contexts/ThemeProvider';
import Navigation from './components/UI/Navigation/Navigation';

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
