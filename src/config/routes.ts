import React from "react"
import MainPage from "@/pages/MainPage/MainPage"
import ProductsPage from "@/pages/ProductsPage/ProductsPage"
import FAQPage from "@/pages/FAQPage/FAQPage"
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage"

export type Route = {
    path: string
    component: React.ComponentType
}

export enum Routes {
    MAIN = '/',
    PRODUCTS = '/products',
    FAQ = '/faq',
    NOT_FOUND = '*'
}

const routes: Route[] = [
    { path: Routes.MAIN, component: MainPage },
    { path: Routes.PRODUCTS, component: ProductsPage },
    { path: Routes.FAQ, component: FAQPage },
    { path: Routes.NOT_FOUND, component: NotFoundPage },
]

export default routes