import React from 'react';

// Helpers

// Components
import Sidebar from 'components/layout/Sidebar';

// Styles
import './style.scss';

class Explore extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.getDatasets();
  }

  render() {
    return (
      <div className="c-page">
        <Sidebar>
          <h2>Explore</h2>
        </Sidebar>

        <div className="c-map">

        </div>
      </div>
    );
  }
}

Explore.propTypes = {
  // STORE
  explore: React.PropTypes.object,
  paginatedDatasets: React.PropTypes.array,

  // ACTIONS
  getDatasets: React.PropTypes.func
};


export default Explore;