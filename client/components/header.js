import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom'
import Accounts from './accounts'

class Header extends Component {
  state = {
    binId: false,
  }

  onBinClick = e => {
    e.preventDefault()

    Meteor.call('bins.insert', (error, binId) => this.setState({binId}))
  }

  render() {
    const {binId} = this.state

    if (binId) {
      this.state.binId = false
      return (
        <Redirect push to={`/bins/${binId}`}/>
      )
    }

    return (
      <nav className="nav navbar-default">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">Markbin</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Accounts/>
          </li>
          <li>
            <a href="#" onClick={this.onBinClick}>Create Bin</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
