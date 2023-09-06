const React = require('react');
const DefaultLayout = require('../Default');

class Edit extends React.Component {
  render() {
    const snack = this.props.snack;
    return (
      <DefaultLayout>
        <form action={`/snacks/${snack._id}?_method=PUT`} method="POST">
          <fieldset>
            <legend>Edit {snack.name}</legend>
            <label>
              NAME:<input
                type="text"
                name="name"
                placeholder="Enter snack name"
                value={snack.name}
              />
            </label>
            <label>
              COST:<input
                type="text"
                name="cost"
                placeholder="Enter snack cost"
                value={snack.cost}
              />
            </label>
            <label> CALORIES:<input
              type="number"
              name="calories"
              placeholder="Enter snack calories"
              value={snack.calories}
            /> </label>
          </fieldset>
          <input type="submit" value="EDIT SNACK" />
        </form>
      </DefaultLayout>
    )
  }
};

module.exports = Edit;