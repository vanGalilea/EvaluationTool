import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

class BatchItem extends PureComponent {
  static PropTypes = {
    number: PropTypes.number.isRequired,
    startDate: PropTypes.number.isRequired,
    endDate: PropTypes.number.isRequired,
    students: PropTypes.array.isRequired,
  }

  render() {
    const { number, startDate, endDate, students, _id } = this.props

    return(
      <article className="batch">
        <Link to={`/batches/${_id}`}>Batch No.{ number }</Link>
        <div>
          <p>{ startDate }</p>
          <p>{ endDate }</p>
          <p>number of students in batch: { !students ? "There are currently no students" : students.length  }</p>
        </div>
      </article>
    )
  }
}

export default BatchItem
