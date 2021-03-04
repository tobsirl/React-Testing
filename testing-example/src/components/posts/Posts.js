import React, { useState, useEffect } from 'react';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const url = 'https://jsonplaceholder.typicode.com/posts';

  async function getPosts(url) {
    const response = await fetch(url);
    const data = await response.json();

    setPosts(data);
  }

  useEffect(() => {
    getPosts(url);
  }, []);

  console.log(posts);
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(({ id, title, body }) => (
          <li key={id}>
            <h3>{title}</h3>
            <p>{body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
