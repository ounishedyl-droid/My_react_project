import { useState, useEffect } from "react";

/* ---------------- HEADER ---------------- */
function Header() {
  return <h1>Hacker News App</h1>;
}

/* ---------------- INPUT ---------------- */
function InputWithLabel({ id, value, onInputChange, children }) {
  return (
    <div>
      <label htmlFor={id}>{children}</label>
      <input id={id} value={value} onChange={onInputChange} />
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

      <button onClick={() => onRemove(story.objectID)}>Delete</button>
    </div>
  );
}

/* ---------------- LIST ---------------- */
function List({ stories, onRemove }) {
  return (
    <div>
      {stories.map((story) => (
        <Item key={story.objectID} story={story} onRemove={onRemove} />
      ))}
    </div>
  );
}

/* ---------------- APP ---------------- */
function App() {
  const API_URL = "https://hn.algolia.com/api/v1/search?query=";

  const [stories, setStories] = useState([]);
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem("search") || ""
  );

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  /* SAVE SEARCH TERM */
  useEffect(() => {
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]);

  /* FETCH DATA */
  useEffect(() => {
    if (!searchTerm) return;

    setIsLoading(true);
    setIsError(false);

    fetch(API_URL + searchTerm)
      .then((res) => res.json())
      .then((data) => {
        setStories(data.hits);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [searchTerm]);

  /* DELETE STORY */
  const handleRemoveStory = (id) => {
    const updated = stories.filter((story) => story.objectID !== id);
    setStories(updated);
  };

  return (
    <div>
      <Header />

      <InputWithLabel
        id="search"
        value={searchTerm}
        onInputChange={(e) => setSearchTerm(e.target.value)}
      >
        Search:
      </InputWithLabel>

      {isError && <p>Something went wrong...</p>}

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <List stories={stories} onRemove={handleRemoveStory} />
      )}
    </div>
  );
}

export default App;