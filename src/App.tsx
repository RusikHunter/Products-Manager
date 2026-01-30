import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import routes from "@/config/routes.ts"
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { useAppDispatch } from './hooks/useAppDispatch'
import { useEffect } from 'react'
import { fetchProducts } from '@/store/asyncActions/fetchProducts'

function App() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <Router>
            <Header />

            <main>
                <Routes>
                    {routes.map(({ path, component: Component }) => (
                        <Route key={path} path={path} element={<Component />} />
                    ))}

                </Routes>
            </main>

            <Footer />
        </Router>
    )

}

export default App 
