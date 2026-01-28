import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import routes from "@/config/routes.ts"
import Header from '@/components/Header/Header'

function App() {


    return (
        <Router>
            <Header />

            <Routes>
                {routes.map(({ path, component: Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}
            </Routes>

            <h2>FOOTER</h2>
        </Router>
    )
}

export default App 
