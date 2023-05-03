import { useState } from "react";
import {
  TwitterIcon,
  TwitterShareButton,
  RedditIcon,
  RedditShareButton,
} from "react-share";

export default function Nav() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="navbar">
      <div className="visible-brand">Drafted</div>
    </div>
  );
}
