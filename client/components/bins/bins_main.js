import React, {Component} from 'react'
import {createContainer} from 'meteor/react-meteor-data'
import {Bins} from "../../../imports/collections/bins"
import BinsEditor from "./bins_editor"
import BinsViewer from './bins_viewer'

class BinsMain extends Component {
  render() {
    if (!this.props.bin) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <div>
          <BinsEditor bin={this.props.bin}/>
          <BinsViewer bin={this.props.bin}/>
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
