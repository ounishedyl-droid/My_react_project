// Hacker News style data (GLOBAL as required by lab)
const stories = [
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

// Header Component
function Header() {
  return <h1>Hacker News App</h1>;
}

// Search Component (UI only for now)
function Search() {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

// List Component (renders stories)
function List() {
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

// Main App Component
function App() {
  return (
    <div>
      <Header />
      <Search />
      <List />
    </div>
  );
}

export default App;