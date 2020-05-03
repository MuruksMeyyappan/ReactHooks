import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [posts, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButton, setIdFromButton] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
      .then((res) => {
        console.log("res--->", res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButton]);

  const handleClick = () => {
      setIdFromButton(id)
  };
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Fetch Post
      </button>
      {posts.title}
      {/* <ui>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ui> */}
    </div>
  );
}

export default DataFetching;
