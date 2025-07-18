import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client'
import './index.css'
import CruiseRouter from './Components/Nav/CruiseRouter'

createRoot(document.getElementById('root')).render(
    <CruiseRouter />
)
