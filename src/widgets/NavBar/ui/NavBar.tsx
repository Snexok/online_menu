import classNames from "classnames"
import { Link } from "react-router-dom"
import cls from "../styles/NavBar.module.scss"

interface NavBarProps {
    className?: string
}

export const NavBar = ({className}: NavBarProps) => {
    return (
        <div className={classNames(cls.NavBar, className)}>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
        </div>
    )
}
