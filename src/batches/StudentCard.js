import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import './StudentCard.css'
import Paper from 'material-ui/Paper'
import Avatar from 'material-ui/Avatar'
import ListItem from 'material-ui/List/ListItem'
import FlatButton from 'material-ui/FlatButton';
import deleteStudent from '../actions/students/delete'

const style1 = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
}

const style2 = {
  height: 150,
  width: 450,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
}

class StudentCard extends PureComponent {
  static PropTypes = {
    student: PropTypes.shape({
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      evaluations: PropTypes.array.isRequired,
    })
  }

  getLastEvaluationColor() {
    const { evaluations } = this.props
    if(evaluations === null) return "no_evaluations"

    const color = evaluations[evaluations.length-1].color


    switch(color){
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
    const { name, picture, _id } = this.props
    const evaluationColor =this.getLastEvaluationColor()

    return(
      <Paper style={style2} zDepth={2} circle={false} >
        <ListItem
          disabled={true}
          leftAvatar={
            <Avatar
              src={picture}
              size={75}
              style={style1}
            />
          }
        >
          <Link to={`/students/${_id}`}>{ name }</Link>
          <FlatButton className="deleteButton" label="[Delete Student]" primary={true} onClick={()=> {this.props.deleteStudent(this.props)}} />
          <p>{evaluationColor !== "no_evaluations" ? "Last evaluation" : "No evaluations yet" }</p>
          <div className={ evaluationColor }/>
        </ListItem>
      </Paper>
    )
  }
}

export default connect(null, { deleteStudent })(StudentCard)
