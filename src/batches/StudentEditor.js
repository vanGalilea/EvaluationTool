import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import createStudent from '../actions/students/create'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'
import './StudentEditor.css'

class StudentEditor extends PureComponent {
  constructor(props) {
    super()

    const { name, picture } = props
    const { batchNum } = props.params
    debugger

    this.state = {
      name,
      picture,
      batchNum,
      evaluations: {},
      errors: {},
    }
  }

    updateName(event) {
    this.setState({
      name: this.refs.name.value
    })
  }

  updatePicture(event) {
    this.setState({
      picture: this.refs.picture.value
    })
  }

  validate(student) {
    const { name, picture } = student

    let errors = {}

    if (!name) errors.name = 'Make sure you give a name'
    if (!picture) errors.picture = 'Please supply a photo URL'

    this.setState({
      errors,
    })

    return Object.keys(errors).length === 0
  }

  saveStudent() {
    const {
      batchNum,
      name,
      picture,
      evaluations
    } = this.state

    const student = {
      batchNum,
      name,
      picture,
      evaluations
    }

    if (this.validate(student)) {
      this.props.createStudent(student)
    }
  }

  render() {
    const { errors } = this.state

    return (
      <div className="editor">
        <input
          type="text"
          ref="name"
          className="name"
          placeholder="Full Name"
          defaultValue={this.state.name}
          onChange={this.updateName.bind(this)}
          onKeyDown={this.updateName.bind(this)} />

        { errors.name && <p className="error">{ errors.name }</p> }

        <input
          type="url"
          ref="picture"
          className="picture"
          placeholder="Picture URL"
          defaultValue={this.state.picture}
          onChange={this.updatePicture.bind(this)}
          onKeyDown={this.updatePicture.bind(this)} />

        { errors.picture && <p className="error">{ errors.picture }</p> }

        <div className="actions">
          <button className="primary" onClick={this.saveStudent.bind(this)}>Save</button>
        </div>
      </div>
    )
  }
}

export default connect(null, { createStudent })(StudentEditor)
