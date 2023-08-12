import "../css/Home.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import db from "../firebase";
import * as firebase from "firebase/firestore";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    firebase.onSnapshot(firebase.collection(db, "posts"), (querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPosts(newData);
    });
  }, []);

  return (
    <div className="home-container">
      <h2>Blog Page</h2>
      {posts.map((post, index) => (
        <div className="post" key={`post-${index}`}>
          <Link className="post-link" to={`/post/${post.id}`}>
            <div className="post-title">{post.title}</div>
          </Link>
          <div className="post-subtitle">{post.subtitle}</div>
        </div>
      ))}
    </div>
  );
}

export default Home;
