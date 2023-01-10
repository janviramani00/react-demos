import axios from "axios";
import React from "react";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});

export default function Main() {
  const [post, setPost] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    client
      .get("?_limit=10")
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) return `Error: ${error.message}`;


  if (!post) return "No post!";

  return (
    <div>
         <div className="tbl-header">
            <table cellPadding="0" cellSpacing="0" border="0">
              <thead>
                <tr>
                  <th>id</th>
                  <th>userId</th>
                  <th>title</th>
                  <th>post</th>
                </tr>
              </thead>
            </table>
          </div>
      {post.map((e) => (
        <>
          <div className="tbl-content">
            <table cellPadding="0" cellSpacing="0" border="0">
              <tbody>
                <tr>
                  <td>{e.id}</td>
                  <td>{e.userId}</td>
                  <td>{e.title}</td>
                  <td>{e.body}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ))}
    </div>
  );
}
