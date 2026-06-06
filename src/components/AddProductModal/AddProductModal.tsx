import { useRef } from "react"
import styles from "./AddProductModal.module.scss"
import { useAppDispatch } from "@/hooks/useAppDispatch"
import { addProduct } from "@/store/reducers/productsReducer"

type AddProductModalProps = {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function AddProductModal({ isOpen, setIsOpen }: AddProductModalProps) {
    const dispatch = useAppDispatch()
    const form = useRef<HTMLFormElement>(null)

    function addNewProduct() {
        if (!form.current) return

        const formData = new FormData(form.current)

        const productData: Record<string, any> = {}

        for (const [key, value] of formData.entries()) {
            if (!value) return

            productData[key] = value
        }

        dispatch(addProduct(productData))

        form.current.reset()

        setIsOpen(false)
    }

    return (
        <dialog className={styles.dialog} open={isOpen}>
            <p className={styles.title}>Add new product</p>

            <form ref={form} className={styles.form}>
                <label className={styles.label} htmlFor="addProductModalTitle">Title:</label>
                <input className={`${styles.input} input`} id="addProductModalTitle" name="title" type="text" />

                <label className={styles.label} htmlFor="addProductModalDescription">Description:</label>
                <textarea className={`${styles.textarea} textarea`} name="description" id="addProductModalDescription"></textarea>

                <label className={styles.label} htmlFor="addProductModalCount">Count:</label>
                <input className={`${styles.input} input`} name="count" id="addProductModalCount" type="number" />

                <label className={styles.label} htmlFor="addProductModalPrice">Price:</label>
                <input className={`${styles.input} input`} name="price" id="addProductModalPrice" type="number" />

                <button
                    className={`${styles.button__submit} button__control`}
                    onClick={() => addNewProduct()}
                    type="button">
                    Confirm
                </button>
            </form>

            <button className={styles.button__close} onClick={() => setIsOpen(false)}>X</button>
        </dialog>
    )
}

export default AddProductModal