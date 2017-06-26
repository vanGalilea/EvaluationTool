import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import createBatch from '../actions/batches/create'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'
import './BatchEditor.css'

class BatchEditor extends PureComponent {
  constructor(props) {
    super()

    const { number, startDate, endDate, students } = props

    this.state = {
      number,
      startDate,
      endDate,
      students,
    }
  }

  updateNumber(event) {
    this.setState({
      number: Number(this.refs.number.value)
    })
  }

  updateStartDate(event) {
    this.setState({
      startDate: this.refs.startDate.value
    })
  }

  updateEndDate(event) {
    this.setState({
      endDate: this.refs.endDate.value
    })
  }

  saveBatch() {
    const {
      number,
      startDate,
      endDate,
      students,
    } = this.state

    const batch = {
      number,
      startDate,
      endDate,
      students,
    }

    this.props.createBatch(batch)
    console.log(batch)
  }

  render() {
    return (
      <div className="editor">
        <input
          type="number"
          ref="number"
          className="number"
          placeholder="Batch No."
          defaultValue={this.state.number}
          onChange={this.updateNumber.bind(this)} />

        <input
          type="date"
          ref="startDate"
          className="startDate"
          placeholder="Start Date"
          defaultValue={this.state.startDate}
          onChange={this.updateStartDate.bind(this)} />

        <input
          type="date"
          ref="endDate"
          className="endDate"
          placeholder="End Date"
          defaultValue={this.state.endDate}
          onChange={this.updateEndDate.bind(this)} />

        <div className="actions">
          <button className="primary" onClick={this.saveBatch.bind(this)}>Save</button>
        </div>
      </div>
    )
  }
}

export default connect(null, { createBatch })(BatchEditor)
