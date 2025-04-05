import PostList from "../Components/Postlist/Postlist";
import Cta from "../Components/Cta/Cta";
import ContentAbout from "../Components/ContentAbout/ContentAbout";


const Blog = () => {
    return (
        <div className="blog">
            <ContentAbout />
            <PostList />
            <Cta />
        </div>
    );
};

export default Blog;