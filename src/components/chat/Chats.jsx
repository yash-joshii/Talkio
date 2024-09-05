import { useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chats = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const handleEmoje = (e) => {
   setText((prev)=> prev +e.emoji);
   setOpen(false)
  };
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>yash joshi</span>
            <p>Lorem ipsum dolor sit amet </p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center"></div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
          <EmojiPicker open={open} onEmojiClick={handleEmoje} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chats;
