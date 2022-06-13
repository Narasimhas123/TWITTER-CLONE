import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PublishIcon from "@material-ui/icons/Publish";

function Post() {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              narasimha
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" /> @murthy
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>twitter post</p>
          </div>
        </div>
        <img
          src="https://yt3.ggpht.com/a/AGF-l78FExrMCq9cKjHazqRxroAfv55_7iVTNPpKqA=s900-c-k-c0xffffffff-no-rj-mo"
          alt="img not found"
        />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteIcon fontSize="small" className="favariteIcon" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
