import { createRoot } from 'react-dom/client'
import { BrowserRouter} from "react-router-dom";

import App from './App.jsx'
import Cursor from './components/Cursor/Cursor.jsx'

import './assets/styles/app.scss'
import './assets/styles/index.css'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        {/* <Cursor /> */}
        <App />
    </BrowserRouter>,
)
