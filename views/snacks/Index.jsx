const React = require('react');
const DefaultLayout = require('../Default');

class Index extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <div>
          <a href='/snacks/new'><button>Create a New Snack</button></a>
          {
            this.props.snacks.map((snack) => (
              <article>
                <a href={`/snacks/${snack._id}`}>
                  <h2>
                    { snack.name } costs { `$${snack.cost}` } and is { snack.calories } Calories!
                  </h2>
                </a>
              </article>
            ))
          }
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = Index;