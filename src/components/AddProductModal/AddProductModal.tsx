import styles from "./AddProductModal.module.scss"

type AddProductModalProps = {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function AddProductModal({ isOpen, setIsOpen }: AddProductModalProps) {
    console.log(isOpen)

    return (
        <dialog className={styles.dialog} open={isOpen}>
            <p className={styles.title}>Add new product</p>

            <form className={styles.form}>
                <label className={styles.label} htmlFor="addProductModalTitle">Title:</label>
                <input className={`${styles.input} input`} id="addProductModalTitle" type="text" />

                <label className={styles.label} htmlFor="addProductModalDescription">Description:</label>
                <textarea className={`${styles.textarea} textarea`} id="addProductModalDescription"></textarea>

                <label className={styles.label} htmlFor="addProductModalCount">Count:</label>
                <input className={`${styles.input} input`} id="addProductModalCount" type="number" />

                <label className={styles.label} htmlFor="addProductModalPrice">Price:</label>
                <input className={`${styles.input} input`} id="addProductModalPrice" type="number" />

                <button className={`${styles.button__submit} button__control`} type="button">Confirm</button>
            </form>

            <button className={styles.button__close} onClick={() => setIsOpen(false)}>X</button>
        </dialog>
    )
}

export default AddProductModal