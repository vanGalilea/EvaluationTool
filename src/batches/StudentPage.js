import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import fetchStudents from '../actions/students/fetch'
import ListItem from 'material-ui/List/ListItem'
import Avatar from 'material-ui/Avatar'
import evaluationsAverage from './evaluationsAverage'
import EvaluationEditor from './EvaluationEditor'
import './StudentPage.css'

const style = {
  height: 150,
  width: 150,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
}


export class StudentPage extends PureComponent {
  componentWillMount() {
    this.props.fetchStudents()
  }

  getTodaysEvaluation(evaluations) {
    if (evaluations === null) return {}
    return evaluations.reduce((prev, next) => {
      if (new Date(next.createdAt).toDateString() === new Date().toDateString()) {
        return next
      }
      return prev
    }, {})
  }

  render() {
    const { name, picture, batchNum, _id, evaluations } = this.props
    if(!name) return null

    const todaysEvaluation = this.getTodaysEvaluation(evaluations)


    return(
      <div className="batch page">

        <h1>{name}</h1>
        <ListItem
          disabled={true}
          leftAvatar={
            <Avatar
              src={picture}
              size={75}
              style={style}
            />
          }
        >
        </ListItem>

        <h4>Batch number: {batchNum}</h4>
        { evaluations !== null ?
          <div>
            <p>Evaluation Average:</p>
            <div className={ evaluationsAverage(this.props) } />
          </div> :
          <p>No evaluations yet</p> }

        <EvaluationEditor studentId={_id} {...todaysEvaluation} />
      </div>
    )
  }
}

const mapStateToProps = ({ students}, { params }) => {
  const student = students.reduce((prev, next) => {
    if (next._id === params.studentId) {
      return next
    }
    return prev
  }, {})

  return {
    ...student,
  }
}

export default connect(mapStateToProps, { fetchStudents })(StudentPage)
