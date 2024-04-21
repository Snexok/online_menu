import classNames from "classnames"
import cls from "./ThemeToggle.module.scss"
import { Button, ThemeButton } from "shared/ui/Button"
import Night from "../assets/night.svg"
import Light from "../assets/light.svg"
import { Theme, useTheme } from "shared/config/ThemeProvider"

interface ThemeToggleProps {
    className?: string
}

export const ThemeToggle = ({className}: ThemeToggleProps) => {
    const {theme, toggleTheme} = useTheme()

    return (
        <Button 
            className={classNames(cls.ThemeToggle, className)} 
            theme={ThemeButton.CLEAR} 
            onClick={toggleTheme}
        >
            { theme === Theme.DARK 
                ? <Night className={cls.night}/> 
                : <Light className={cls.light}/>}
        </Button>
    )
}
