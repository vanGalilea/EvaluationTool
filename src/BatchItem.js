import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class BatchItem extends PureComponent {
  static PropTypes = {
    number: PropTypes.number.isRequired,
    startDate: PropTypes.number.isRequired,
    endDate: PropTypes.number.isRequired,
    students: PropTypes.array.isRequired,
  }

  render() {
    const { number, startDate, endDate, students } = this.props

    return(
      <article className="batch">
        <h1>{ number }</h1>
        <div>
          <p>{ startDate }</p>
          <p>{ endDate }</p>
          <p>{ students.count }</p>
        </div>
      </article>
    )
  }
}

export default BatchItem
