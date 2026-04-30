import { useState, useEffect } from "react";

const initialStories = [
  {
    objectID: 1,
    title: "React is awesome",
    url: "https://react.dev",
    author: "Dan Abramov",
    points: 100,
    num_comments: 20,
  },
  {
    objectID: 2,
    title: "Vite is fast",
    url: "https://vitejs.dev",
    author: "Evan You",
    points: 80,
    num_comments: 10,
  },
];

function List({ stories }) {
  return (
    <div>
      {stories.map((story) => (
        <div key={story.objectID}>
          <h3>
            <a href={story.url} target="_blank" rel="noreferrer">
              {story.title}
            </a>
          </h3>
          <p>{story.author}</p>
          <p>{story.points} points</p>
          <p>{story.num_comments} comments</p>
        </div>
      ))}
    </div>
  );
}

function Search({ searchTerm, onSearch }) {
  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

function App() {
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem("search") || ""
  );

  useEffect(() => {
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]);

  const filteredStories = initialStories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Hacker News App</h1>
      <Search searchTerm={searchTerm} onSearch={setSearchTerm} />
      <List stories={filteredStories} />
    </div>
  );
}

export default App;