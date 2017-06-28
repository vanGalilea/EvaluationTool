import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchBatches from '../actions/batches/fetch'
import StudentCard from './StudentCard'
import AskQuestion from './AskQuestion'

export class StudentPage extends PureComponent {
  static PropTypes = {
    number: PropTypes.string.isRequired,
  }

  componentWillMount() {
    this.props.fetchBatches()
  }

  renderStudents(student, index) {
    return <StudentCard key={index} { ...student } { ...this.props.params} />
  }

  render() {
    const { number, startDate, endDate, students } = this.props
    if(!students) return null

    return(
      <div className="batch page">
        <AskQuestion { ...this.props }/>
        <h1>Batch No. {number}</h1>
        <h4>{startDate}</h4>
        <h4>{endDate}</h4>
        <h5>Students List:</h5>
        { students.map(this.renderStudents.bind(this)) }
      </div>
    )
  }
}

const mapStateToProps = ({ batches}, { params }) => {
  const student = batches.reduce((prev, next) => {
    if (next._id === params.batchId) {
      return next
    }
    return prev
  }, {})

  return {
    ...student
  }
}

export default connect(mapStateToProps, { fetchBatches })(StudentPage)
