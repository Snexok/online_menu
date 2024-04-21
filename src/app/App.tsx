import { Suspense } from 'react';
import {Route, Routes} from 'react-router-dom';
import './styles/index.scss';
import classNames from 'classnames';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { useTheme } from 'shared/config/ThemeProvider';
import { NavBar } from 'widgets/NavBar';
import { ErrorPage } from 'pages/ErrorPage';
import { Loader } from 'widgets/Loader';


const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames("app", theme)}>
            <NavBar/>
            <div className="content">
                <Suspense fallback={<Loader/>}>
                    <Routes>
                        <Route path={'/about'} element={<AboutPage />} />
                        <Route path={'/'} element={<MainPage />} />
                        <Route path={'*'} element={<ErrorPage />} />
                    </Routes>
                </Suspense>
            </div>
        </div>
    );
};

export default App;
