import { useState, useEffect } from "react";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/posts.json")
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error("Помилка завантаження постів:", error));
  }, []);

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", fontFamily: "Arial" }}>
      <h1>Список постів</h1>
      {posts.map((post) => (
        <div key={post.id} style={{ borderBottom: "1px solid #ddd", padding: "15px 0" }}>
          <h2>{post.title}</h2>
          <p style={{ color: "gray" }}>{post.date} • {post.category}</p>
          {post.image && <img src={post.image} alt={post.title} style={{ maxWidth: "100%" }} />}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      ))}
    </div>
  );
};

export default App;
