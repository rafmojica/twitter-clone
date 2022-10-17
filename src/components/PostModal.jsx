import { MoreHoriz } from "@mui/icons-material";
import { doc, deleteDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase/init";
import "./PostModal.css";

function PostModal({ id, getTweets }) {
  const [modal, setModal] = useState(false);

  async function deleteTweet(tweetId) {
    const docRef = doc(db, "posts", tweetId);
    await deleteDoc(docRef);

    getTweets();
  }

  return (
    <>
      <div className="modal__container">
        <MoreHoriz className="modal" onClick={() => setModal(!modal)} />
        {modal && (
          <button className="modal__content" onClick={() => deleteTweet(id)}>
            Delete
          </button>
        )}
      </div>
    </>
  );
}

export default PostModal;
