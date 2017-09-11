import React, {Component} from 'react';

class BinsMain extends Component {
  render() {
    console.log(this.props.match.params.binId)
    return (
      <div>
        <div>BinMain</div>
      </div>
    );
  }
}

export default BinsMain;