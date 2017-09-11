import React, {Component} from 'react'
import {createContainer} from 'meteor/react-meteor-data'
import {Bins} from "../../../imports/collections/bins"
import BinsEditor from "./bins_editor"

class BinsMain extends Component {
  render() {
    return (
      <div>
        <div>
          <BinsEditor bin={this.props.bin}/>
        </div>
      </div>
    )
  }
}

export default createContainer(props => {
  const {binId} = props.match.params
  Meteor.subscribe('bins')
  return {bin: Bins.findOne(binId)}
}, BinsMain)
