import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import fetchStudents from '../actions/students/fetch'
import ListItem from 'material-ui/List/ListItem'
import Avatar from 'material-ui/Avatar'
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

  evaluationsAverage (evaluations) {
    const colorsSum = evaluations.reduce((acc, evaluation)=> {
      return acc + evaluation.color
    }, 0)

    const average = Math.round(colorsSum/evaluations.length)

    switch(average){
      case 3 :
        return "green"

      case 2 :
        return "yellow"

      case 1 :
        return "red"

      default :
        return null
    }
  }

  render() {
    const { name, picture, evaluations, batchNum } = this.props
    if(!name) return null

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
        <h5>Evaluation Average: </h5>
        <div className={ this.evaluationsAverage }></div>
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
