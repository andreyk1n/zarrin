import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import PostPage from "./Components/Postpage/Postpage";

function App() {
    return (
        <Router>
            <Header />

            <Routes>
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
