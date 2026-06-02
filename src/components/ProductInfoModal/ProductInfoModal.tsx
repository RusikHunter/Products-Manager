import styles from "./ProductInfoModal.module.scss"
import { useAppDispatch } from "@/hooks/useAppDispatch"
import { setIsCurrentProductForInfoAvailable } from "@/store/reducers/productsReducer"
import { useAppSelector } from "@/hooks/useAppSelector"

function ProductInfoModal() {
    const dispatch = useAppDispatch()

    const handleCloseClick = (): void => {
        dispatch(setIsCurrentProductForInfoAvailable(false))
    }

    const isOpen = useAppSelector(state => state.productsReducer.isCurrentProductForInfoAvailable)

    return (
        <dialog open={isOpen} className={`${styles.dialog} dialog`}>
            <div className={styles.dialog__content}>
                <button className={`${styles.button__close} button__control`} onClick={handleCloseClick}>X</button>

                <p className={styles.id}>ID: 123</p>

                <h1 className={styles.title}>Banana</h1>

                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae harum sint est assumenda porro quos numquam optio deserunt aliquid animi provident excepturi ipsam unde sapiente, alias rem blanditiis. Aliquid, a.</p>

                <p className={styles.count}>Count: 999</p>

                <p className={styles.production__date}>Production date: 30.01.2026</p>

                <p className={styles.price}>Price: 19.99$</p>

                <button className={`${styles.button__change} button__control`}>Change</button>

                <button className={`${styles.button__delete} button__control`}>Delete</button>
            </div>
        </dialog>
    )
}

export default ProductInfoModal