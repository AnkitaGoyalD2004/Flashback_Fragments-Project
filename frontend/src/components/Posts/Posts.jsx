import SinglePost from "../SinglePost/SinglePost";
import { useSelector } from "react-redux";
import { Spinner } from "daisyui";

const Posts = () => {
  const { posts, isLoading } = useSelector((state) => state.postsState);

  return (
    <div className="flex flex-col space-y-4">
      {isLoading ? (
        <Spinner />
      ) : (
        <Grid container spacing={3}>
          {posts.map((post) => (
            <Grid item key={post._id} xs={12} sm={11} md={6}>
              <SinglePost post={post} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Posts;
