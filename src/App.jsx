import { useState } from "react";

const List = ({ stories }) => {
  return (
    <div>
      {stories.map((story) => (
        <div key={story.objectID}>
          <h3>
            <a href={story.url}>{story.title}</a>
          </h3>
          <p>{story.author}</p>
          <p>{story.points} points</p>
          <p>{story.num_comments} comments</p>
        </div>
      ))}
    </div>
  );
};

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

const App = () => {
  const stories = [
    {
      objectID: 1,
      title: "React is awesome",
      url: "https://react.dev",
      author: "Dan Abramov",
      points: 100,
      num_comments: 20
    },
    {
      objectID: 2,
      title: "Vite is fast",
      url: "https://vitejs.dev",
      author: "Evan You",
      points: 80,
      num_comments: 10
    }
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Hacker News App</h1>

      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <List stories={filteredStories} />
    </div>
  );
};

export default App;