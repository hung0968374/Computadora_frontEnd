import React from "react";

export default function Posts({ posts, loading }) {
  if (loading) {
    return <h2>Loading.....</h2>;
  }
  console.log(posts);
  return (
    <div>
      <ul className="list_group">
        {posts.map((post) => {
          return (
            <li key={post.id} className="list_group_item">
              {post.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
