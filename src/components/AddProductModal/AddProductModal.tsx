import styles from "./AddProductModal.module.scss"

function AddProductModal() {
    return (
        <dialog className={styles.dialog} open>
            <form className={styles.form}>
                <p>Add new product</p>

                <label htmlFor="addProductModalTitle">Title:</label>
                <input id="addProductModalTitle" type="text" />

                <label htmlFor="addProductModalDescription">Description:</label>
                <textarea id="addProductModalDescription"></textarea>

                <label htmlFor="addProductModalCount">Count:</label>
                <input id="addProductModalCount" type="number" />

                <label htmlFor="addProductModalPrice">Price:</label>
                <input id="addProductModalPrice" type="number" />

                <button type="button">Confirm</button>
            </form>

        </dialog>
    )
}

export default AddProductModal