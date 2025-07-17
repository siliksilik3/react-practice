import { Link } from "react-router-dom";
import { Modal } from "../components/Modal";
import classes from "./NewPost.module.css";
import { useState } from "react";

function NewPost(props) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredText, setEnteredText] = useState("");

  function changeBody(event) {
    setEnteredBody(event.target.value);
  }
  function changeText(event) {
    setEnteredText(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredText,
    };
    props.onAddPost(postData);
    props.onCancel();
  }

  return (
    <Modal >
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBody} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeText} />
      </p>
      <p className={classes.actions}>
        <button>Submit</button>
        <Link type="button" to='..' >
          Cancel
        </Link>
      </p>
    </form>
    </Modal>
  );
}

export default NewPost;
