import React, { PureComponent } from 'react'
import BatchItem from './BatchItem'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class BatchesContainer extends PureComponent {
  static PropTypes = {
    batches: PropTypes.array.isRequired,
  }

  renderBatch(batch, index) {
    return <BatchItem key={ index } { ...batch } />
  }

  render() {
    return(
      <div className="batches wrapper">
        <header>
          <h2>Batches List:</h2>
        </header>

        <main>
          { this.props.batches.map(this.renderBatch) }
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ batches }) => ({
  batches
})

export default connect(mapStateToProps)(BatchesContainer)
