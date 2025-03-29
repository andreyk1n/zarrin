import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import PostPage from "./Components/Postpage/Postpage";
import Hero from "./Components/Hero/Hero";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

function App() {
    return (
        <Router>
            <Header />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<PostPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
