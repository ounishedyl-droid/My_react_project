const stories = [
  {
    objectID: 1,
    title: "React is awesome",
    author: "Dan",
  },
  {
    objectID: 2,
    title: "Vite is fast",
    author: "Evan",
  }
];

const Header = () => {
  return <h1>Hacker News App</h1>;
};

const Search = () => {
  const handleChange = (event) => {
    console.log(event.target.value);
    console.log("Typing...");
  };

  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

const List = () =>
  stories.map((story) => (
    <div key={story.objectID}>
      <h3>{story.title}</h3>
      <p>{story.author}</p>
    </div>
  ));

const App = () => {
  return (
    <div>
      <Header />
      <Search />
      <List />
    </div>
  );
};

export default App;
/*
1. Concise arrow functions are used when we return one expression.

2. Block body arrow functions are used when we need logic before return.

3. Event objects contain information about the interaction, including input value.
*/