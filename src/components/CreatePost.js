import "../css/CreatePost.css";
import db from "../firebase";
import * as firebase from 'firebase/firestore';
import {useFormInputs} from '../hooks';

function CreatePost() {
  const title = useFormInputs('');
  const subtitle = useFormInputs('');
  const content = useFormInputs('');
  const collection = firebase.collection(db, 'posts');

  function handleSubmit(e){
    e.preventDefault();
    console.log(title, subtitle, content);
    if(title.value ==='' || content.value ===''){
      alert("Title and content cannot be empty.")
      return;
    }
    firebase.addDoc(collection,{
      title: title.value,
      subtitle: subtitle.value,
      content: content.value,
      createdAt: new Date()
    } )
    const titleElement = document.getElementById('title');
    const subtitleElement = document.getElementById('sub-title');
    const contentElement = document.getElementById('content');
    titleElement.value='';
    subtitleElement.value='';
    contentElement.value='';
  }

  return (
    <div className="create-post">
      <h2>Create a post</h2>
      <form className="post-form" onSubmit={handleSubmit}>
        <label className="label-name">Title</label>
        <textarea id="title" rows="2" name="title" {...title} />
        <label className="label-name">Sub Title</label>
        <textarea id="sub-title" rows="2" name="sub-title" {...subtitle} />
        <label className="label-name">Content</label>
        <textarea id="content" rows="6" name="content" {...content} />
        <button className="submit-form" type="submit">
          Create Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
