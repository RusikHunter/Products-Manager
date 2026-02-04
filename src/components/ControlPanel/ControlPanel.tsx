import { useAppDispatch } from "@/hooks/useAppDispatch"
import { removeProducts, removeSelectedProducts } from "@/store/reducers/productsReducer"
import styles from "./ControlPanel.module.scss"
import { fetchProducts } from "@/store/asyncActions/fetchProducts"

type Control = {
    name: string,
    onClickFunction?: () => void,
    options?: {
        name: string,
        value: string
    }[],
    type: "button" | "select"
}

function ControlPanel() {
    const controls: Control[] = [
        { name: "Add new product", onClickFunction: mock, type: "button" },
        { name: "Update the list", onClickFunction: updateList, type: "button" },
        {
            name: "Sort by", options: [
                { name: "By ID", value: "byid" },
                { name: "By quantity", value: "byquantity" },
                { name: "By price", value: "byprice" }
            ], type: "select"
        },
        { name: "Delete selected products", onClickFunction: deleteSelectedProducts, type: "button" },
        { name: "Delete all products", onClickFunction: deleteAllProducts, type: "button" },
    ]

    const dispatch = useAppDispatch()

    function updateList() {
        dispatch(fetchProducts())
    }

    function deleteAllProducts() {
        dispatch(removeProducts())
    }

    function deleteSelectedProducts() {
        dispatch(removeSelectedProducts())
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
                                {controls.map(({ name, onClickFunction, options, type }) => (
                                    type === "button"
                                        ?
                                        <button
                                            key={name}
                                            className={`${styles.button} button__control`}
                                            onClick={onClickFunction}
                                        >{name}</button>
                                        :
                                        <select
                                            key={name}
                                            className={`${styles.select} select__control`}
                                        >
                                            {options?.map(({ name, value }) => (
                                                <option value={value}>{name}</option>
                                            ))}
                                        </select>
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