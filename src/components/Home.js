import css from "../css/Home.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import db from "../firebase";
import * as firebase from "firebase/firestore";
import styled from 'styled-components';

const Post = styled.div`
  background-color: rgb(244, 207, 255);
  margin: 2rem 0;
  padding: 1rem 2rem;
  &:hover{
    background-color: rgb(246, 235, 255);
  }
  a{
    text-decoration: none;
  }
`;

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
    <div className={css.homeContainer}>
      <h2>Blog Page</h2>
      {posts.map((post, index) => (
        <Post className={css.post} key={`post-${index}`}>
          <Link className={css.postLink} to={`/post/${post.id}`}>
            <div className={css.postTitle}>{post.title}</div>
          </Link>
          <div className={css.postAuthor}>Author: {post.author}</div>
        </Post>
      ))}
    </div>
  );
}

export default Home;
