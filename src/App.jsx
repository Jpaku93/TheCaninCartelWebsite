import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Method from './pages/Method';
import Classes from './pages/Classes';

import Booking from './pages/Booking';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';


function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="app-container">
                <Navbar />
                <main className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<Method />} />
                        <Route path="/programs" element={<Classes />} />

                        <Route path="/booking" element={<Booking />} />
                    </Routes>
                </main>
                <Footer />
                <BottomNav />
            </div>
        </Router>
    );
}

export default App;
