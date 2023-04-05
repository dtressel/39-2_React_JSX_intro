const App = () => (
  <div>
    <Tweet 
      user="Jessica Alba" 
      username="AlbaRocks" 
      date="5/20/2022" 
      message="Is it possible to like chocolate ice cream more than I do?"
    />
    <Tweet 
      user="Jackie Chan" 
      username="SuperKicks" 
      date="12/20/2022" 
      message="I just broke my leg filming Rush Hour 4!"
    />
    <Tweet 
      user="Owen Wilson" 
      username="BumpyNose" 
      date="12/21/2022" 
      message="@SuperKicks, Don't beat yourself up too much! You gotta be ready to film Shanghai Nightmares in a couple months!"
    />
  </div>
)


ReactDOM.render(<App />, document.getElementById('root'));