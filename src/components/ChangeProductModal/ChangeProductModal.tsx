import styles from "./ChangeProductModal.module.scss"
import { useAppDispatch } from "@/hooks/useAppDispatch"
import { useAppSelector } from "@/hooks/useAppSelector"
import { setIsChangeProductModalOpen } from "@/store/reducers/productsReducer"

function ChangeProductModal() {
    const dispatch = useAppDispatch()

    const isOpen = useAppSelector(state => state.productsReducer.isChangeProductModalOpen)

    const handleCloseClick = (): void => {
        dispatch(setIsChangeProductModalOpen(false))
    }

    const handleSaveClick = (event: React.MouseEvent): void => {
        event.preventDefault()
        dispatch(setIsChangeProductModalOpen(false))
    }

    return (
        <dialog open={isOpen} className={`${styles.dialog} dialog`}>
            <div className={styles.dialog__content}>
                <button className={`${styles.button__close} button__control`} onClick={handleCloseClick}>X</button>

                <p className={styles.id}>ID: 123</p>

                <form className={styles.form}>
                    <label htmlFor="changeModalTitleInput" className={styles.label}>Title: </label>
                    <input type="text" id="changeModalTitleInput" className={`${styles.input} input`} />

                    <label htmlFor="changeModalDescriptionInput" className={styles.label}>Description: </label>
                    <input type="text" id="changeModalDescriptionInput" className={`${styles.input} input`} />

                    <label htmlFor="changeModalCountInput" className={styles.label}>Count: </label>
                    <input type="number" id="changeModalCountInput" className={`${styles.input} input`} />

                    <label htmlFor="changeModalPriceInput" className={styles.label}>Price: </label>
                    <input type="number" id="changeModalPriceInput" className={`${styles.input} input`} />

                    <button className={`${styles.button__save} button__control`} onClick={(event) => handleSaveClick(event)}>Save changes</button>
                </form>
            </div>
        </dialog>
    )
}

export default ChangeProductModal