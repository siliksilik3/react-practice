import { Post } from "./Post";
import NewPost from "../routes/NewPost";
import classes from "./List.module.css";

import { useLoaderData } from "react-router-dom";

export  function List() {
  const posts= useLoaderData();
  return (
    <>
        { posts.length !== 0 && (
                <ul className={classes.posts}>
         { posts.map((post) => (
            <Post author={post.author} body={post.body} key={post.body} id={post.id}/>
          ))}
          </ul>
        )} {posts.length === 0 && (
          <div style={{ textAlign: "center" }}>
            <h2>No Post Yet</h2>
          </div>
        )}
    </>
  );
}
