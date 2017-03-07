import React from 'react';
import { Link } from 'react-router';
import CompoundMenu from 'components/ui/CompoundMenu';
import partners from 'components/common/Partners/partners.json';
import Carousel from 'components/ui/Carousel';

// import Menu from 'components/ui/Menu';
import './style.scss';

const data = [
  { name: 'Data', path: '#' },
  { name: 'Explore Datasets', path: '/explore' },
  { name: 'Dashboards', path: '/dashboards' },
  { name: 'Planet Pulse', path: '/planet-pulse' }
];

const about = [
  { name: 'About', path: '/about' },
  { name: 'Partners', path: '/partners' }
];

const insights = [
  { name: 'Insights', path: '/insights' },
  { name: 'Recent insights', path: '#' },
  { name: 'Highlighted insights', path: '#' }
];

const getInvolved = [
  { name: 'Get involved', path: '#' },
  { name: 'Submit an insight', path: '#' },
  { name: 'Contribute data', path: '#' },
  { name: 'Join the community', path: '#' }
];

const items = () => {
  return partners.map((p, i) => <img key={i} className="-img" src={require(`images/partners/${p.img}`)}/> );
};

function Footer() {
  const menuData = [data, about, insights, getInvolved];

  return (
    <footer className="c-footer">
      <div className="footer-intro">
        <h5 className=""><Link to="/partners">Partners</Link></h5>
        <Carousel items={items()} />
      </div>

      <div className="footer-main">
        <div className="menu">
          <CompoundMenu items={menuData} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
