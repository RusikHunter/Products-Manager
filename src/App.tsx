import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import routes from "@/config/routes.ts"
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

function App() {


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
