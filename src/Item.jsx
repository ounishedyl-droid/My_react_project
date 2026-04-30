function Item({ story }) {
  return (
    <div>
      <h3>
        <a href={story.url} target="_blank">
          {story.title}
        </a>
      </h3>

      <p>{story.author}</p>
      <p>{story.points} points</p>
      <p>{story.num_comments} comments</p>
    </div>
  );
}

export default Item;