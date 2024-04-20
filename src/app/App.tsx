import { Suspense } from 'react';
import {Route, Routes} from 'react-router-dom';
import './styles/index.scss';
import classNames from 'classnames';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { useTheme } from 'shared/config/ThemeProvider';
import { NavBar } from 'widgets/NavBar';
import { Button, ThemeButton } from 'shared/ui/Button';
import { ThemeToggle } from 'widgets/ThemeToggle';


const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames("app", theme)}>
            <NavBar/>
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
