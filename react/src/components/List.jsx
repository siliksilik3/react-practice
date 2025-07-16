import { Post } from "./Post";
import NewPost from "./NewPost";
import classes from "./List.module.css";
import { useEffect, useState } from "react";
import { Modal } from "./Modal";

export  function List({ modalVisability, hideModal }) {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching]= useState(false)
 useEffect(()=>{
  async function featchPosts() {
    setIsFetching(true)
    const response=await fetch('http://localhost:3080/posts');
    const resData= await response.json();
    setPosts(resData.posts)
    setIsFetching(false)
  }
  featchPosts()
 }, [])
  function addPostHandler(postData) {
    const postBackEnd = fetch('http://localhost:3080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    setPosts([postData, ...posts]);
  }
  return (
    <>
      {modalVisability ? (
        <Modal onClose={hideModal}>
          <NewPost onCancel={hideModal} onAddPost={addPostHandler} />
        </Modal>
      ) : null}

        {!isFetching && posts.length !== 0 && (
                <ul className={classes.posts}>
         { posts.map((post) => (
            <Post author={post.author} body={post.body} key={post.body} />
          ))}
          </ul>
        )} {!isFetching && posts.length === 0 && (
          <div style={{ textAlign: "center" }}>
            <h2>No Post Yet</h2>
          </div>
        )}
        {isFetching && <p>LOADING POSTS...</p>}
    </>
  );
}
