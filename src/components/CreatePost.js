import styles from "../css/CreatePost.module.css";
import db from "../firebase";
import * as firebase from 'firebase/firestore';
import {useFormInputs} from '../hooks';
import styled, {css} from 'styled-components';

const CreateHeading = styled.h2 `
  text-align: center;
  color: rgb(89, 0, 152);
`;
const TextArea = styled.textarea`
  border: none;
  resize: none;
  font-size: 1rem;
`;

const Button = styled.button`
    padding: 1rem 2rem;
    width: fit-content;
    margin: 1rem 0;
    font-size: 1.2rem;
    border: none;
    border-radius: 2rem;
    background-color: ${(props) => (props.primary? 'blueviolet': 'rgb(162, 95, 225)')};
    color: white;
    display: span;
    margin-left: 1rem;
    &:hover{
      cursor: pointer;
      background-color: rgb(193, 128, 255); 
    }
    ${(props) => 
      props.primary &&
      css`
      margin-left: 10%;
      ` 
    }
`;
function CreatePost() {
  const title = useFormInputs('');
  const author = useFormInputs('');
  const content = useFormInputs('');
  const collection = firebase.collection(db, 'posts');

  function resetForm(){
    const titleElement = document.getElementById('title');
    const authorElement = document.getElementById('author');
    const contentElement = document.getElementById('content');
    titleElement.value='';
    authorElement.value='';
    contentElement.value='';
  }

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
    resetForm();
  }

  return (
    <div className={styles.createPost}>
      <CreateHeading>Create a post</CreateHeading>
      <form className={styles.postForm} onSubmit={handleSubmit}>
        <label className={styles.labelName}>Title</label>
        <TextArea id="title" rows="2" name="title" {...title} />
        <label className={styles.labelName}>Author name</label>
        <TextArea id="author" rows="2" name="author" {...author} />
        <label className={styles.labelName}>Content</label>
        <TextArea id="content" rows="6" name="content" {...content} />
      </form>
        <Button primary className={styles.submitForm} type="submit">Create Post</Button>
        <Button type="reset" onClick={resetForm}>Reset</Button>
    </div>
  );
}

export default CreatePost;
