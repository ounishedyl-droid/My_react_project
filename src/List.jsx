
import Item from "./Item";

function List({ stories }) {
  return (
    <div>
      {stories.map((story) => (
        <Item key={story.objectID} story={story} />
      ))}
    </div>
  );
}

export default List;