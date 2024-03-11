import GoogleLogo from "./Google.png";
import FacebookLogo from "./Facebook.png";
import YouTubeLogo from "./YouTube.png";
import PinterestLogo from "./Pinterest.png";
import TwitchLogo from "./Twitch.png";
import WebflowLogo from "./Webflow.png";
import "./SocialMediaProof.css";

function SocialMediaProof() {
  return (
    <div className="social-media-proof">
      <span className="social-media-logo">
        <img src={GoogleLogo} alt={GoogleLogo} />
      </span>
      <span className="social-media-logo">
        <img src={FacebookLogo} alt={FacebookLogo} />
      </span>

      <span className="social-media-logo">
        <img src={YouTubeLogo} alt={YouTubeLogo} />
      </span>

      <span className="social-media-logo">
        <img src={PinterestLogo} alt={PinterestLogo} />
      </span>
      <span className="social-media-logo">
        <img src={TwitchLogo} alt={TwitchLogo} />
      </span>
      <span className="social-media-logo">
        <img src={WebflowLogo} alt={WebflowLogo} />
      </span>
    </div>
  );
}

export default SocialMediaProof;
