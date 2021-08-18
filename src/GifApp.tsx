import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from './components/Contexts/ThemeProvider';
import Navigation from './components/UI/Navigation/Navigation';

function GifApp() {
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
}

export default GifApp;
