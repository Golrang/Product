import * as React from "react";
import fetch from "cross-fetch";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export function SayHello() {
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchPosts = async () => {
    setIsLoading(true);
    await fetch("https://jsonplaceholder.typicode.com/postssdfsdfsdf")
      .then((res: any) => res.json())
      .then((posts) => setPosts(posts as Post[]));

    setIsLoading(false);
  };

  return (
    <main className="App">
      <h1>MSW Testing Library Example</h1>
      {isLoading && <span aria-label="loading">Loading...</span>}
      {posts.length > 0 && (
        <span className="tesssss" role="alert">
          {posts.length}
        </span>
      )}
      <button onClick={() => fetchPosts()}>Fetch Posts</button>
    </main>
  );
}
