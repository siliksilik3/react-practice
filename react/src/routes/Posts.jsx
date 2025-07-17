
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
