import { useAppDispatch } from "@/hooks/useAppDispatch"
import { removeProducts } from "@/store/reducers/productsReducer"
import styles from "./ControlPanel.module.scss"
import { fetchProducts } from "@/store/asyncActions/fetchProducts"

function ControlPanel() {
    const buttons = [
        { name: "Add new product", onClickFunction: mock },
        { name: "Update the list", onClickFunction: updateList },
        { name: "Sort by", onClickFunction: mock },
        { name: "Delete selected products", onClickFunction: mock },
        { name: "Delete all products", onClickFunction: deleteAllProducts },
    ]

    const dispatch = useAppDispatch()

    function updateList() {
        dispatch(fetchProducts())
    }

    function deleteAllProducts() {
        dispatch(removeProducts())
    }

    function mock() {
        console.log(123)
    }

    return (
        <section className={`${styles.control_panel_content} section`}>
            <div className={`${styles.container} container`}>
                <div className={`${styles.row} row`}>
                    <div className={`${styles.column} column`}>
                        <h1 className={styles.title}>Control panel</h1>

                        <nav className={styles.button_navigation}>
                            <div className={styles.button_wrap}>
                                {buttons.map(({ name, onClickFunction }) => (
                                    <button
                                        key={name}
                                        className={`${styles.button} button__control`}
                                        onClick={onClickFunction}
                                    >{name}</button>
                                ))}
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ControlPanel