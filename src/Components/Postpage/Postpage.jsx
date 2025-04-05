import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Postpage.css";
import Cta from "../Cta/Cta";
import Popular from "../Popular/Popular";

const PostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch("/posts.json")
      .then((res) => res.json())
      .then((data) => {
        const foundPost = data.find((p) => p.slug === slug);
        setPost(foundPost);
      })
      .catch((error) => console.error("Помилка завантаження поста:", error));
  }, [slug]);

  if (!post) {
    return <p>Завантаження...</p>;
  }

  return (
    <>
      <div className="post-page">
        <div className="post-page__container">
          <p className="post__date">
            {post.date} | {post.category}
          </p>
          <h1 className="post__title">{post.title}</h1>
          <img src={post.image} alt={post.title} className="post__image" />
          <div
            className="post__content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
      <Popular />
      <Cta />
    </>
  );
};

export default PostPage;
