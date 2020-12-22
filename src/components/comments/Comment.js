import React, { useState, useEffect } from "react";
import db from "../../utils/firebase";
import CommentsList from "./CommentsList";

const Comment = () => {
  const [comments, setComments] = useState(null);
  const [fullname, setFullName] = useState("");
  const [message, setFullMessage] = useState("");
  // const [errors, setErrors] = useState(false);

  useEffect(
    () =>
      db
        .collection("comments")
        .get()
        .then((querySnapshot) => {
          setComments(querySnapshot);
        }),
    [comments]
  );

  const handleName = (e) => {
    setFullName(e.target.value);
  };

  const handleMessage = (e) => {
    setFullMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const timestamp = new Date().getTime().toString();
    // do stringa bo firebase wyrzuci błąd

    const createdComment = {
      id: timestamp,
      name: fullname,
      comment: message,
    };

    // !errors &&
    db.collection("comments")
      .doc(timestamp)
      .set(createdComment)
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });

    setFullName("");
    setFullMessage("");
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="fullname"
          placeholder="Imię"
          value={fullname}
          onChange={handleName}
        />
        {errors.noInput && <span>pole nie moze byc puste</span>}

        <input
          type="textarea"
          name="message"
          placeholder="Dodaj swój komentarz.."
          value={message}
          onChange={handleMessage}
        />
        <button type="submit" onClick={handleSubmit}>
          Wyślij
        </button>
      </form>
      <CommentsList comments={comments} />
    </div>
  );
};

export default Comment;
