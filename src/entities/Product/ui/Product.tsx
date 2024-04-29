import classNames from "classnames"
import cls from "./Product.module.scss"

interface ProductProps {
    className?: string,
    img: string,
    composition: string
}

export const Product = ({className, img, composition}: ProductProps) => {
    return (
        <div className={classNames(cls.Product, className)}>
            <img src={img} alt="" className={cls.img}/>
            <div className={cls.composition}>
                <div className={cls.back}>
                    <div className={cls.text}>
                        { composition }
                    </div>
                </div>
            </div>
        </div>
    )
}
