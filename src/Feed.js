import "./feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
function Feed() {
  return (
    <div className="feed">
      <div className="feed__header">Home</div>
      <TweetBox />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
