import { Suspense } from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss';
import classNames from 'classnames';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { useTheme } from 'shared/ThemeProvider';


const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames("app", theme)}>
            <button onClick={toggleTheme}>T</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage />} />
                    <Route path={'/'} element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;