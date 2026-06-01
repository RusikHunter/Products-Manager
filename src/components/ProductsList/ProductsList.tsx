import styles from "./ProductsList.module.scss"
import Product from "@/components/Product/Product"
import ProductInfoModal from "../ProductInfoModal/ProductInfoModal"
import { useAppSelector } from "@/hooks/useAppSelector"
import type { ProductType } from "@/@types/ProductType"
import { useState } from "react"

function ProductsList() {
    const products: ProductType[] = useAppSelector(state => state.productsReducer.products)

    if (!products) return

    const [isProductInfoModalOpen, setIsProductInfoModalOpen] = useState<boolean>(true)

    return (
        <section className={`${styles.products_list_content} section`}>
            <div className={`${styles.container} container`}>
                <div className={`${styles.row} row`}>
                    <div className={`${styles.column} column`}>
                        <ul className={styles.list}>
                            {products !== undefined ?

                                products.map((product) => (
                                    <Product key={product.id} product={product} />
                                ))
                                :
                                <h1>No products yet</h1>
                            }
                        </ul>

                        <ProductInfoModal isOpen={isProductInfoModalOpen} setIsOpen={setIsProductInfoModalOpen} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductsList