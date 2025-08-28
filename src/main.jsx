import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Projects from './Projects.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/all-projects" element={<Projects />} />
        <Route path="*" element={<center><h1>Page Not Found!</h1></center>} />
    </Routes>
    </BrowserRouter>
)
