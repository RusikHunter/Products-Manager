import styles from "./ProductsList.module.scss"
import Product from "@/components/Product/Product"
import ProductInfoModal from "../ProductInfoModal/ProductInfoModal"

function ProductsList() {
    return (
        <section className={`${styles.products_list_content} section`}>
            <div className={`${styles.container} container`}>
                <div className={`${styles.row} row`}>
                    <div className={`${styles.column} column`}>
                        <ul className={styles.list}>
                            <Product />
                            <Product />
                            <Product />
                        </ul>

                        <ProductInfoModal />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductsList