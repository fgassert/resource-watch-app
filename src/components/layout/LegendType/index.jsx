import React from 'react';
import './style.scss';

class LegendType extends React.Component {

  getLegendType() {
    const config = this.props.config;
    switch (config.type) {
      case 'basic': {
        const items = config.items;

        return (
          <div className={`type -${config.type}`}>
            <div className="type-list">
              {items.map(item => (
                <div className="type-list-item" key={`type-list-item-${item.name}`}>
                  <span className="color" style={{ background: item.color }} />
                  <span className="name">{item.name}{config.unit}</span>
                </div>
                ))}
            </div>
          </div>
        );
      }

      case 'gradient': {
        const items = config.items;
        // Gradient & values
        const gradient = items.map(item => item.color);
        const values = [items[0], items[items.length - 1]];

        return (
          <div className={`type -${config.type}`}>
            <div className="type-list">
              <div className="type-list-item" style={{ width: '100%', backgroundImage: `linear-gradient(to right, ${gradient.join(',')})` }}>
                <span className="color" />
              </div>
            </div>
            <div className="type-list">
              {values.map(item => (
                <div className="type-list-item" key={`type-list-item-${item.name}`}>
                  <span className="value">{item.value}{config.unit}</span>
                </div>
                ))}
            </div>
          </div>
        );
      }


      case 'choropleth': {
        return (
          <div className={`type -${config.type}`}>
            <div className="type-list">
              {config.items.map(item => (
                <div
                  className="type-list-item"
                  style={{ width: `${100 / config.items.length}%` }}
                  key={`type-list-item-${item.name}`}
                >
                  <span className="color" style={{ background: item.color }} />
                </div>
                ))}
            </div>
            <div className="type-list">
              {config.items.map(item => (
                <div
                  className="type-list-item"
                  style={{ width: `${100 / config.items.length}%` }}
                  key={`type-list-item-${item.name}`}
                >
                  <span className="value">{item.value}</span>
                </div>
                ))}
            </div>
          </div>
        );
      }

      default: {
        console.error('No type specified');
        return null;
      }
    }
  }

  render() {
    return (
      <div className="c-legend-type">
        {this.getLegendType()}
      </div>
    );
  }
}

LegendType.propTypes = {
  // PROPS
  config: React.PropTypes.object
};


export default LegendType;
