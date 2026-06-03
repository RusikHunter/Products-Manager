import styles from "./ProductInfoModal.module.scss"
import { useAppDispatch } from "@/hooks/useAppDispatch"
import { removeProductByObject, setIsCurrentProductForInfoAvailable } from "@/store/reducers/productsReducer"
import { useAppSelector } from "@/hooks/useAppSelector"
import type { ProductType } from "@/@types/ProductType"

function ProductInfoModal() {
    const dispatch = useAppDispatch()

    const isOpen: boolean = useAppSelector(state => state.productsReducer.isCurrentProductForInfoAvailable)
    const currentProduct: ProductType | null = useAppSelector(state => state.productsReducer.currentProductForInfo)

    const handleCloseClick = (): void => {
        dispatch(setIsCurrentProductForInfoAvailable(false))
    }

    const handleDeleteClick = (): void => {
        dispatch(removeProductByObject(currentProduct))
        handleCloseClick()
    }

    return (
        <dialog open={isOpen} className={`${styles.dialog} dialog`}>
            <div className={styles.dialog__content}>
                <button className={`${styles.button__close} button__control`} onClick={handleCloseClick}>X</button>

                <p className={styles.id}>ID: {currentProduct?.id}</p>

                <h1 className={styles.title}>{currentProduct?.title}</h1>

                <p className={styles.description}>{currentProduct?.description}</p>

                <p className={styles.count}>Count: {currentProduct?.count}</p>

                <p className={styles.production__date}>Production date: {currentProduct?.production_date}</p>

                <p className={styles.price}>Price: {currentProduct?.price}$</p>

                <button className={`${styles.button__change} button__control`}>Change</button>

                <button className={`${styles.button__delete} button__control`} onClick={handleDeleteClick}>Delete</button>
            </div>
        </dialog>
    )
}

export default ProductInfoModal