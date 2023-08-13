import css from "../css/CreatePost.module.css";
import db from "../firebase";
import * as firebase from 'firebase/firestore';
import {useFormInputs} from '../hooks';

function CreatePost() {
  const title = useFormInputs('');
  const author = useFormInputs('');
  const content = useFormInputs('');
  const collection = firebase.collection(db, 'posts');

  function handleSubmit(e){
    e.preventDefault();
    if(title.value ==='' || content.value ===''|| author.value ===''){
      alert("Title, author name and content cannot be empty.")
      return;
    }
    firebase.addDoc(collection,{
      title: title.value,
      author: author.value,
      content: content.value,
      createdAt: new Date()
    } )
    const titleElement = document.getElementById('title');
    const authorElement = document.getElementById('author');
    const contentElement = document.getElementById('content');
    titleElement.value='';
    authorElement.value='';
    contentElement.value='';
  }

  return (
    <div className={css.createPost}>
      <h2>Create a post</h2>
      <form className={css.postForm} onSubmit={handleSubmit}>
        <label className={css.labelName}>Title</label>
        <textarea id="title" rows="2" name="title" {...title} />
        <label className={css.labelName}>Author name</label>
        <textarea id="author" rows="2" name="author" {...author} />
        <label className={css.labelName}>Content</label>
        <textarea id="content" rows="6" name="content" {...content} />
        <button className={css.submitForm} type="submit">
          Create Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
