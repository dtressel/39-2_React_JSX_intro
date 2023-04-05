const App = () => (
  <div>
    <Person age="14" name="Henry" hobbies={["baseball", "soccer", "chess"]} />
    <Person age="18" name="Susan" hobbies={["shopping", "storm-chasing", "photography", "baking"]} />
    <Person age="68" name="Barabara" hobbies={["knitting", "walking", "bird-watching"]} />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'));