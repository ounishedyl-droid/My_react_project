import { useState, useEffect } from "react";

/* ---------------- HEADER ---------------- */
function Header() {
  return <h1>Hacker News App</h1>;
}

/* ---------------- REUSABLE INPUT (COMPOSITION) ---------------- */
function InputWithLabel({ id, type = "text", value, onInputChange, children }) {
  return (
    <div>
      <label htmlFor={id}>{children}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onInputChange}
      />
    </div>
  );
}

/* ---------------- ITEM ---------------- */
function Item({ story, onRemove }) {
  return (
    <div>
      <h3>
        <a href={story.url} target="_blank" rel="noreferrer">
          {story.title}
        </a>
      </h3>

      <p>{story.author}</p>
      <p>{story.points} points</p>
      <p>{story.num_comments} comments</p>

      <button onClick={() => onRemove(story.objectID)}>
        Delete
      </button>
    </div>
  );
}

/* ---------------- LIST ---------------- */
function List({ stories, onRemove }) {
  return (
    <div>
      {stories.map((story) => (
        <Item
          key={story.objectID}
          story={story}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

/* ---------------- APP ---------------- */
function App() {
  const initialStories = [
    {
      objectID: "1",
      title: "React is awesome",
      url: "https://react.dev",
      author: "Dan Abramov",
      points: 100,
      num_comments: 20,
    },
    {
      objectID: "2",
      title: "Vite is fast",
      url: "https://vitejs.dev",
      author: "Evan You",
      points: 80,
      num_comments: 10,
    },
  ];

  const [stories, setStories] = useState(initialStories);

  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem("search") || ""
  );

  useEffect(() => {
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]);

  /* ---------------- REMOVE FUNCTION ---------------- */
  const handleRemoveStory = (id) => {
    const filteredStories = stories.filter(
      (story) => story.objectID !== id
    );
    setStories(filteredStories);
  };

  /* ---------------- FILTER ---------------- */
  const filteredStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />

      <InputWithLabel
        id="search"
        value={searchTerm}
        onInputChange={(e) => setSearchTerm(e.target.value)}
      >
        <strong>Search:</strong>
      </InputWithLabel>

      <List stories={filteredStories} onRemove={handleRemoveStory} />
    </div>
  );
}

export default App;