import './App.css';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from './pages/Home';
import Account from './pages/Account';

function App() {
    useEffect(() => {
        document.title = "Programming Languages";
        AOS.init()
    }, []);

    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='account' element={<Account />} />
            </Routes>
        </div>

    );
}
export default App;