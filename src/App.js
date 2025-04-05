import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import PostPage from "./Components/Postpage/Postpage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

import NotFound from "./pages/NotFound"; 


function App() {
    return (
        <Router>
            <Header />
            <ScrollToTop />
            <Routes>
                <Route path="/zarrin" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<PostPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
