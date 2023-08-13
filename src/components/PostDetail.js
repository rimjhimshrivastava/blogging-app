import css from "../css/PostDetail.module.css";
import { useEffect, useState } from "react";
import db from "../firebase";
import * as firebase from "firebase/firestore";
import { useParams } from "react-router-dom";


function PostDetail() {
  const [post, setPost] = useState({});
  const {postId} = useParams();   //name should be same as used in app.js :postId
  useEffect(() => {
    const ref = firebase.doc(firebase.collection(db, "posts"), postId);
    firebase.getDoc(ref).then((querySnapshot)=>{
      setPost(querySnapshot.data());
    })
  }, [postId]);

  return (
    <div className={css.postDetail}>
      <div className={css.postTitle}>{post.title}</div>
      <div className={css.postAuthor}>Author: {post.author}</div>
      <div className={css.postContent}>{post.content}</div>
    </div>
  );
}

export default PostDetail;
