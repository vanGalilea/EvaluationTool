import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchBatches from '../actions/batches/fetch'
import fetchStudents from '../actions/students/fetch'
import StudentCard from './StudentCard'
import CreateStudentButton from './CreateStudentButton'
import AskQuestion from './AskQuestion'

export class BatchPage extends PureComponent {
  static PropTypes = {
    number: PropTypes.string.isRequired,
  }

  componentWillMount() {
    this.props.fetchBatches()
    this.props.fetchStudents()
  }


  renderStudents(student, index) {
    return <StudentCard key={index} { ...student } { ...this.props.params} />
  }

  render() {
    const { number, startDate, endDate } = this.props.batch
    const { studentsOfBatch } = this.props

    if(!number) return null

    return(
      <div className="batch page">
        <AskQuestion students={ studentsOfBatch }/>
        <h1>Batch No. {number}</h1>
        <h4>{new Date(startDate).toDateString()} - {new Date(endDate).toDateString()}</h4>
        <CreateStudentButton batchNum={number}/>
        <h5>Students List:</h5>
        { studentsOfBatch.map(this.renderStudents.bind(this)) }
      </div>
    )
  }
}

const mapStateToProps = ({ batches, students}, { params }) => {
  const studentsOfBatch = students.filter((student) => {
    return student.batchNum === parseInt(params.batchNum)
  })

  const batch = batches.reduce((prev, next) => {
    if (next.number === parseInt(params.batchNum)) {
      return next
    }
    return prev
  }, {})

  return {
    batch,
    studentsOfBatch,
  }
}

export default connect(mapStateToProps, { fetchBatches, fetchStudents })(BatchPage)
