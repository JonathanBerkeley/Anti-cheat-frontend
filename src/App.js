import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ThemeProvider, theme } from '@primer/react'
import deepmerge from 'deepmerge'

// Styles
import './styles/App.css'
import "@fontsource/roboto"

// Components
import Navbar from './components/Navbar'

// Pages
import Home from './pages/Home'
import PageNotFound from './pages/404'

const customTheme = deepmerge(theme, {
    fonts: {
        "normal": "Roboto light, sans-serif",
        "mono": "Roboto light, sans-serif"
    }
})

// Root component, superceded by only index.js
const App = () => {
    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setAuthenticated(true)
        }
    }, [])

    // Responsible for managing authentication status throughout application
    const onAuthenticated = (auth, token) => {
        setAuthenticated(auth)
        if (auth) {
            localStorage.setItem("token", token)
        }
        else {
            localStorage.removeItem("token")
        }
    }

    return (
        <ThemeProvider colorMode="night" theme={customTheme}>
            <Router>
                <Navbar onAuthenticated={onAuthenticated} authenticated={authenticated} />
                <Routes>
                    <Route path="/"
                        element={<Home />} />
                    <Route path="*"
                        element={<PageNotFound />} />
                </Routes>
            </Router>
        </ThemeProvider>
    )
}

export default App
