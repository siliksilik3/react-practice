
import { Outlet } from "react-router-dom";
import {List} from "../components/List"
import { useState } from "react";

function Posts() {
  return (
    <>
  <Outlet/>
      <main>
        <List />
      </main>
    </>
  );
}

export default Posts;


export async function loader(){
    const response=await fetch('http://localhost:3080/posts');
    const resData= await response.json();
    return resData.posts
}
 