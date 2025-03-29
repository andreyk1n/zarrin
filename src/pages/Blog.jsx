import PostList from "../Components/Postlist/Postlist";
import Cta from "../Components/Cta/Cta";

const Blog = () => {
    return (
        <div className="blog">
            <h1>Блог</h1>
            <PostList />
            <Cta />
        </div>
    );
};

export default Blog;