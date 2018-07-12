import React, {Component} from 'react';

import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="row" id="footer">
        <div className="medium-12 columns">
          <p>(C) Elmalick <a href="https://github.com/Elmndiaye">github repo</a></p>
        </div>
      </div>
    );
  }
}

export default Footer;