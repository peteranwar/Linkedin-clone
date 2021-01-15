import React, { useState, useEffect } from "react";
import CreateIcon from "@material-ui/icons/Create";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import ImageIcon from "@material-ui/icons/Image";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import "./style.scss";
import InputOption from "./InputOption";
import Post from "./Post";
import { db } from "../../firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

import FlipMove from 'react-flip-move';


function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  const user = useSelector(selectUser);



  useEffect(() => {
    db.collection("posts")
    .orderBy("timestamp", "desc")
    .onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("")
  };
  return (
    <div className="feed-container">
      <div className="input-container">
        <div className="input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Start a post"
              type="text"
            />
            <button type="submit" onClick={sendPost}>
              Send
            </button>
          </form>
        </div>
        <div className="inputOptions-container">
          <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#e7a33e" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#ce92cb" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#f5987e"
          />
        </div>
      </div>
      {/* POSTSS */}
      <FlipMove>

      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
