import classNames from "classnames"
import cls from "./ErrorPage.module.scss"

export const ErrorPage = () => {

    return (
        <div className={classNames(cls.ErrorPage)}>
            Страница не найдена 😭
        </div>
    )
}
