const stories = [
  {
    objectID: "1",
    title: "React is awesome",
    url: "https://react.dev",
    author: "Dan",
    points: 100,
    num_comments: 20
  },
  {
    objectID: "2",
    title: "Vite makes dev fast",
    url: "https://vitejs.dev",
    author: "Evan",
    points: 85,
    num_comments: 12
  }
];

function Header() {
  return <h2>🔥 My Hacker News App</h2>;
}

function Search() {
  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input type="text" id="search" />
    </div>
  );
}

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
          <p>Author: {story.author}</p>
          <p>Points: {story.points}</p>
          <p>Comments: {story.num_comments}</p>
        </div>
      ))}
    </div>
  );
}

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

/*
STEP 4 REFLECTION:

1. App now only organizes components and does not contain UI logic.

2. List is responsible for rendering the stories.

3. Search handles only the input UI.

4. This structure is cleaner because each component has a single responsibility.
*/