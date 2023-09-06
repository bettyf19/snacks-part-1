const React = require('react');
const DefaultLayout = require('../Default');

class Show extends React.Component {
  render() {
    const snack = this.props.snack
    return (
      <DefaultLayout>
        <div>
          <article>
            <h2>
              { snack.name } costs {`$${snack.cost}`} and is { snack.calories } Calories!
            </h2>
            <a href={`/snacks/${snack._id}/Edit`}><button>Edit</button></a>
            <form action={`/snacks/${snack._id}?_method=DELETE`} method="POST">
              <input type="submit" value="Delete" />
            </form>
            <a href="/snacks/"><button>Back to Main</button></a>
          </article>
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = Show;