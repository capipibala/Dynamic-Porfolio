import { LocaleProvider } from './i18n/LocaleProvider';
import './App.css';
import { PortfolioPage } from './pages/PortfolioPage';

function App() {
    return (
        <LocaleProvider>
            <PortfolioPage />
        </LocaleProvider>
    );
}

export default App;
