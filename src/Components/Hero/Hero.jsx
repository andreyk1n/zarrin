import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";


const Hero = () => {
    const [pinnedPost, setPinnedPost] = useState(null);

    useEffect(() => {
        fetch('https://andreyk1n.github.io/zarrin/posts.json')
            .then((res) => res.json())
            .then((data) => {
                const pinned = data.find((post) => post.pinned === "true");
                setPinnedPost(pinned);
            })
            .catch((error) => console.error("Помилка завантаження постів:", error));
    }, []);

    if (!pinnedPost) {
        return <p>Завантаження...</p>;
    }

    return (
        <div className="hero">
            <div className="hero__container">
                <div className="hero__text">
                    <span>Featured post</span>
                    <h1>{pinnedPost.title}</h1>
                    <p>{pinnedPost.describe}</p>
                    <Link to={`/blog/${pinnedPost.slug}`} className="hero__button">Read more</Link>
                </div>
                <img src={pinnedPost.image} alt={pinnedPost.title} className="hero__image" draggable="false" />
            </div>
        </div>
    );
};


export default Hero;
