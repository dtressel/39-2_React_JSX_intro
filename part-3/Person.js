const Person = (props) => {
  return (
    <div style={{border:'1px solid black'}}>
      <p>Learn some information about this person</p>
      <h3>{props.age >= 18 ? "please go vote!" : "you must be 18"}</h3>
      <p>Name: {props.name.slice(0, 6)}</p>
      <h4>Hobbies:</h4>
      <ul>
        {props.hobbies.map(hobby => <li>{hobby}</li>)}
      </ul>
    </div>
  );
}