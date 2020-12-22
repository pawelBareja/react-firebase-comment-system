import React from "react";

const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments &&
        comments.docs.map((item) => (
          <div key={item.data().id}>
            <p>{item.data().name}</p>
            <p>{item.data().comment}</p>
          </div>
        ))}
    </div>
  );
};

export default CommentsList;
