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
    const { number, startDate, endDate } = this.props

    return(
      <article className="batch">
        <Link to={`/batches/${number}`}>Batch No.{ number }</Link>
          <p>{ new Date(startDate).toDateString() } - { new Date(endDate).toDateString() }</p>
      </article>
    )
  }
}

export default BatchItem
