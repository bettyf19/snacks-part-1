const React = require('react');
const DefaultLayout = require('../Default');

class New extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <form action="/snacks" method="POST">
          <fieldset>
            <legend>Create a New Snack</legend>
            <label>
              NAME:<input type="text" name="name" placeholder="Enter snack name" />
            </label>
            <label>
              COST:<input type="text" name="cost" placeholder="Enter snack cost" />
            </label>
            <label> 
              CALORIES:<input type="number" name="calories" /> 
            </label>
          </fieldset>
          <input type="submit" value="CREATE NEW SNACK" />
        </form>
      </DefaultLayout>
    )
  }
}

module.exports = New;