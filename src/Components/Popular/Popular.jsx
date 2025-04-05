import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Popular.css"; 

const Popular = () => {
  const [posts, setPosts] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    fetch("/posts.json")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Помилка завантаження постів:", error));
  }, []);

  const filteredPosts = posts
    .filter((post) => post.pinned === "false" && post.slug !== slug)
    .sort((a, b) => b.views - a.views)
    .slice(0, 3); 

  return (
    <div className="post-list">
        <div className="post-list__container-head">
            <h2>Popular posts</h2>
        </div>
      <div className="post-list__container">
        {filteredPosts.map((post) => (
          <div key={post.id} className="post">
            <Link to={`/blog/${post.slug}`} className="post__image-link">
              <img src={post.image} alt={post.title} className="post__image" />
            </Link>

            <div className="post__head">
              <p className="post__category">{post.category}</p>
              <p className="post__date">{post.date}</p>
            </div>

            <div className="post__content">
              <h3 className="post__title">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="post__description">{post.describe}</p>
              <Link to={`/blog/${post.slug}`} className="post__read-more">
                Read more..
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
