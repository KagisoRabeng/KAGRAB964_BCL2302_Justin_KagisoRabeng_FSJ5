import classes from './comment-list.module.css';

function CommentList(props) {
  const { items } = props;

  // Check if items is defined and is an array
  if (!items || !Array.isArray(items)) {
    return <div>No comments to display</div>;
  }

  return (
    <ul className={classes.comments}>
      {items.map((item) => (
        <li key={item._id}>
          <p>{item.text}</p>
          <div>
            By <address>{item.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}


export default CommentList;
