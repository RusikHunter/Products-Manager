import type { ProductType } from "@/@types/ProductType"
import styles from "./ChangeProductModal.module.scss"
import { useAppDispatch } from "@/hooks/useAppDispatch"
import { useAppSelector } from "@/hooks/useAppSelector"
import { setIsChangeProductModalOpen } from "@/store/reducers/productsReducer"
import { useState } from "react"

function ChangeProductModal() {
    const dispatch = useAppDispatch()

    const isOpen = useAppSelector(state => state.productsReducer.isChangeProductModalOpen)
    const currentProduct: ProductType | null = useAppSelector(state => state.productsReducer.currentProductForInfo)

    const [changedProduct, setChangedProduct] = useState<ProductType | null>(currentProduct)

    if (!currentProduct) return

    const handleCloseClick = (): void => {
        dispatch(setIsChangeProductModalOpen(false))
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target

        // console.log(name)

        setChangedProduct(prev => ({


        }))
    }

    const handleSaveSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()




        dispatch(setIsChangeProductModalOpen(false))
    }

    return (
        <dialog open={isOpen} className={`${styles.dialog} dialog`}>
            <div className={styles.dialog__content}>
                <button className={`${styles.button__close} button__control`} onClick={handleCloseClick}>X</button>

                <p className={styles.id}>ID: 123</p>

                <form className={styles.form} onSubmit={handleSaveSubmit}>
                    <label htmlFor="changeModalTitleInput" className={styles.label}>Title: </label>
                    <input
                        type="text"
                        id="changeModalTitleInput"
                        className={`${styles.input} input`}
                        value={changedProduct?.title ?? ""}
                        onChange={handleChange}
                    />

                    <label htmlFor="changeModalDescriptionInput" className={styles.label}>Description: </label>
                    <input
                        type="text"
                        id="changeModalDescriptionInput"
                        className={`${styles.input} input`}
                        value={changedProduct?.description ?? ""}
                        onChange={handleChange}
                    />

                    <label htmlFor="changeModalCountInput" className={styles.label}>Count: </label>
                    <input
                        type="number"
                        id="changeModalCountInput"
                        className={`${styles.input} input`}
                        value={changedProduct?.count ?? ""}
                        onChange={handleChange}
                    />

                    <label htmlFor="changeModalPriceInput" className={styles.label}>Price: </label>
                    <input
                        type="number"
                        id="changeModalPriceInput"
                        className={`${styles.input} input`}
                        value={changedProduct?.price ?? ""}
                        onChange={handleChange}
                    />

                    <button type="submit" className={`${styles.button__save} button__control`}>Save changes</button>
                </form>
            </div>
        </dialog>
    )
}

export default ChangeProductModal