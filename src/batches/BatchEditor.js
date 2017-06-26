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
      errors: {},
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

  validate(batch) {
    const { number, startDate, endDate } = batch

    let errors = {}

    if (!number) errors.number = 'Make sure you give a number'
    if (number < 0) errors.number = 'Please try to cooperate and fill a positive number'
    if (!startDate || startDate === '') errors.startDate = "Don't forget the start date"
    if (!endDate || endDate === '') errors.endDate = "Don't forget the end date"
    if (endDate < startDate) errors.dates = "The periode of dates doesn't make sense: make sure that the start date is before the end date"

    this.setState({
      errors,
    })

    return Object.keys(errors).length === 0
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

    if (this.validate(batch)) {
      this.props.createBatch(batch)
    }
  }

  render() {
    const { errors } = this.state

    return (
      <div className="editor">
        <input
          type="number"
          ref="number"
          className="number"
          placeholder="Batch No."
          defaultValue={this.state.number}
          onChange={this.updateNumber.bind(this)}
          onKeyDown={this.updateNumber.bind(this)} />

        { errors.number && <p className="error">{ errors.number }</p> }

        <input
          type="date"
          ref="startDate"
          className="startDate"
          placeholder="Start Date"
          defaultValue={this.state.startDate}
          onChange={this.updateStartDate.bind(this)}
          onKeyDown={this.updateStartDate.bind(this)} />

        { errors.startDate && <p className="error">{ errors.startDate }</p> }

        <input
          type="date"
          ref="endDate"
          className="endDate"
          placeholder="End Date"
          defaultValue={this.state.endDate}
          onChange={this.updateEndDate.bind(this)}
          updateStartDate={this.updateEndDate.bind(this)} />

        { errors.endDate && <p className="error">{ errors.endDate }</p> }
        { errors.dates && <p className="error">{ errors.dates }</p> }

        <div className="actions">
          <button className="primary" onClick={this.saveBatch.bind(this)}>Save</button>
        </div>
      </div>
    )
  }
}

export default connect(null, { createBatch })(BatchEditor)
