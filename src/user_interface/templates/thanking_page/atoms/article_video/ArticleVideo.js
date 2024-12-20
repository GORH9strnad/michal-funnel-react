import "./ArticleVideo.css";
import video from "../../../../assets/videos/static/video.mp4";
import ReactPlayer from "react-player";

function ArticleVideo() {
  return (
    <div className="thanking-article-video">
      <ReactPlayer url={video} controls width="50vw" height="50vh" />
    </div>
  );
}

export default ArticleVideo;
