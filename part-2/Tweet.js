const Tweet = (props) => (
  <div style={{border:'1px solid black'}}>
    <p><b>{props.user}</b>@{props.username}</p>
    <p>{props.date}</p>
    <p>{props.message}</p>
  </div>
);