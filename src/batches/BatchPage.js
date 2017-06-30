import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchBatches from '../actions/batches/fetch'
import fetchStudents from '../actions/students/fetch'
import StudentCard from '../students/StudentCard'
import CreateStudentButton from '../students/CreateStudentButton'
import AskQuestion from '../algorithm/AskQuestion'
import { history } from '../store'
import ColorBar from './ColorBar'

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
    const { studentsOfBatch, signedIn } = this.props
    if(!number) return null
    if(!signedIn) return history.replace('/sign-in')
    
    return(
      <div className="batch page">
        <ColorBar students={ studentsOfBatch }/>
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

const mapStateToProps = ({ batches, students, currentUser }, { params }) => {
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
    signedIn: !!currentUser && !!currentUser._id
  }
}

export default connect(mapStateToProps, { fetchBatches, fetchStudents })(BatchPage)


// <ColorBar students={ studentsOfBatch }/>
