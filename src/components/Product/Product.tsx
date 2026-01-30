import { useAppDispatch } from "@/hooks/useAppDispatch"
import styles from "./Product.module.scss"
import type { ProductType } from "@/store/asyncActions/fetchProducts"
import { removeProductByObject } from "@/store/reducers/productsReducer"
import { addProductToSelected } from "@/store/reducers/productsReducer"
import { removeProductOfSelected } from "@/store/reducers/productsReducer"

type ProductProps = {
    product: ProductType
}

function Product({ product }: ProductProps) {
    const dispatch = useAppDispatch()

    function onDelete() {
        dispatch(removeProductByObject(product))
    }

    function onCheckboxClick(event: React.ChangeEvent<HTMLInputElement>): void {
        const checked = event.target.checked

        console.log(checked)

        if (checked) {
            dispatch(addProductToSelected(product))
        } else {
            dispatch(removeProductOfSelected(product))
        }
    }

    return (
        <article className={styles.product}>
            <div className={styles.content}>
                <div className={styles.info}>
                    <p className={styles.id}>ID: {product.id}</p>

                    <h6 className={styles.title}>{product.title}</h6>

                    <p className={styles.count}>Count: {product.count}</p>
                </div>

                <div className={styles.control_panel}>
                    <label className={styles.label__select} htmlFor="checkbox__select__1"></label>
                    <input
                        className={styles.checkbox__select}
                        id="checkbox__select__1"
                        type="checkbox"
                        onChange={onCheckboxClick}
                    />

                    <button className={`${styles.button__delete} button__control`} onClick={onDelete}>Delete</button>

                    <button className={`${styles.button__info} button__control`}>Show info</button>
                </div>
            </div>
        </article>
    )
}

export default Product