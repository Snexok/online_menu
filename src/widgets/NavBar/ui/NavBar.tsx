import classNames from "classnames"
import cls from "./NavBar.module.scss"
import { AppLink } from "shared/ui/AppLink"
import { ThemeToggle } from "widgets/ThemeToggle"

interface NavBarProps {
    className?: string
}

export const NavBar = ({className}: NavBarProps) => {
    return (
        <div className={classNames(cls.NavBar, className)}>
            <AppLink to={'/'}>Главная</AppLink>
            <AppLink to={'/about'}>О сайте</AppLink>
            <div className={cls.right}>
                <ThemeToggle/>
            </div>
        </div>
    )
}
