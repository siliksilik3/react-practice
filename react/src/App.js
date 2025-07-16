import { List } from "./components/List";
import MainHeader from "./components/MainHeader";
import { useState } from "react";

function App() {
  const [modalVisability, setModalVisability] = useState(false);

  function hideModal() {
    setModalVisability(false);
  }

  function showModal() {
    setModalVisability(true);
  }
  return (
    <>
      <MainHeader onCreatePost={showModal} />
      <main>
        <List modalVisability={modalVisability} hideModal={hideModal} />
      </main>
    </>
  );
}

export default App;
