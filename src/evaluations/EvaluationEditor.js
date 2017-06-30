import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import createEvaluation from '../actions/evaluations/create'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'
import '../students/StudentEditor.css'

const COLORS = [
  "red",
  "yellow",
  "green",
]

class EvaluationEditor extends PureComponent {
  constructor(props) {
    super()

    const { currentUser } = props
    let {color, remarks, authorName } = props
    if (!authorName) authorName = currentUser._id
    this.state = {
      color,
      remarks,
      authorName,
      errors: {},
    }
  }

  updateRemarks(event) {
    this.setState({
      remarks: this.refs.remarks.value
    })
  }

  updateColor(event) {

    let { value } = event.target

    switch(value){
      case "green" :
        return this.setState({ color: 3 })

      case "yellow" :
        return this.setState({ color: 2 })

      case "red" :
        return this.setState({ color: 1 })

      default :
        return null
    }
  }

  validate(evaluation) {

    const { remarks, color } = evaluation

    let errors = {}

    if (!color) errors.color = 'Please choose a color'
    if (!remarks && color !== 3) errors.remarks = 'You have to fill a remark if the evaluation is not green'

    this.setState({
      errors,
    })

    return Object.keys(errors).length === 0
  }

  saveEvaluation() {
    const { studentId, currentUser } = this.props
    const { color, remarks } = this.state
    const evaluation = { color, remarks, authorName:currentUser._id }

    if (this.validate(evaluation)) {
      this.props.createEvaluation(evaluation, studentId)
    }
  }

  render() {
    const { errors, authorName } = this.state
    const { currentUser, createdAt} = this.props
    const disaledOrNot = !(currentUser._id === authorName)

    return (
      <div className="editor">
      {disaledOrNot ? <p className="error">This evaluation can be edited only by its author</p> : null}
      {new Date(createdAt) < new Date() ? <p className="error">An evaluation for today is already been made</p> : null}
        <p>Evaluate student:</p>
        {COLORS.map((color, index) => {
            return <label key={color} htmlFor={color}>
              <input
                id={color}
                type="radio"
                name="color"
                disabled={disaledOrNot}
                checked={this.state.color === index+1}
                value={color}
                onChange={this.updateColor.bind(this)} />
              {color}
            </label>
          })}

        { errors.color && <p className="error">{ errors.color }</p> }

        <input
          type="text"
          ref="remarks"
          className="remarks"
          disabled={disaledOrNot}
          placeholder="Fill in your evaluation remarks"
          defaultValue={this.state.remarks}
          onChange={this.updateRemarks.bind(this)}
          onKeyDown={this.updateRemarks.bind(this)} />

        { errors.remarks && <p className="error">{ errors.remarks }</p> }

        <div className="actions">
          <button
            className="primary"
            disabled={disaledOrNot}
            onClick={this.saveEvaluation.bind(this)}>Save</button>

        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ students, currentUser }) => ({ students, currentUser })

export default connect(mapStateToProps, {createEvaluation})(EvaluationEditor)
