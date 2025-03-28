import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Postlist.css";

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("/posts.json")
            .then((res) => res.json())
            .then((data) => setPosts(data))
            .catch((error) => console.error("Помилка завантаження постів:", error));
    }, []);

    return (
        <div className="post-list">
            {posts.map((post) => (
                <div key={post.id} className="post">
                    <img src={post.image} alt={post.title} className="post__image" />
                    <div className="post__content">
                        <h2>
                            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                        </h2>
                        <p className="post__category">{post.category}</p>
                        <p className="post__date">{post.date}</p>
                        <p className="post__description">{post.describe}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostList;
