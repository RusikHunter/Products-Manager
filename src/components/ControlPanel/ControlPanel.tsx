import { useAppDispatch } from "@/hooks/useAppDispatch"
import { removeProducts, removeSelectedProducts, sortProductsBy } from "@/store/reducers/productsReducer"
import styles from "./ControlPanel.module.scss"
import { fetchProducts } from "@/store/asyncActions/fetchProducts"
import AddProductModal from "../AddProductModal/AddProductModal"
import { useState } from "react"

export enum SortSelectValues {
    BY_ID,
    BY_QUANTITY,
    BY_PRICE
}

type Control = {
    name: string,
    onClickFunction?: () => void,
    options?: {
        name: string,
        value: number
    }[],
    type: "button" | "select"
}

function ControlPanel() {
    const [isAddProductModalOpen, setIsAddProductModalOpen] = useState<boolean>(false)

    const controls: Control[] = [
        { name: "Add new product", onClickFunction: addNewProduct, type: "button" },
        { name: "Update the list", onClickFunction: updateList, type: "button" },
        {
            name: "Sort by", options: [
                { name: "By ID", value: SortSelectValues.BY_ID },
                { name: "By quantity", value: SortSelectValues.BY_QUANTITY },
                { name: "By price", value: SortSelectValues.BY_PRICE }
            ], type: "select"
        },
        { name: "Delete selected products", onClickFunction: deleteSelectedProducts, type: "button" },
        { name: "Delete all products", onClickFunction: deleteAllProducts, type: "button" },
    ]

    const dispatch = useAppDispatch()

    function updateList(): void {
        dispatch(fetchProducts())
    }

    function deleteAllProducts(): void {
        dispatch(removeProducts())
    }

    function deleteSelectedProducts(): void {
        dispatch(removeSelectedProducts())
    }

    function addNewProduct(): void {
        setIsAddProductModalOpen(true)
    }

    function sortBy(e: React.ChangeEvent<HTMLSelectElement>): void {
        const value: number = Number(e.target.value)

        dispatch(sortProductsBy(value))
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
                                            onChange={sortBy}
                                        >
                                            {options?.map(({ name, value }) => (
                                                <option
                                                    value={value}
                                                    key={value}
                                                >{name}</option>
                                            ))}
                                        </select>
                                ))}
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            <AddProductModal isOpen={isAddProductModalOpen} setIsOpen={setIsAddProductModalOpen} />
        </section>
    )
}

export default ControlPanel