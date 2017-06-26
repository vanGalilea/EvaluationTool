import React, { PureComponent } from 'react'


class BatchesContainer extends PureComponent {
  renderBatch(batch, index) {
  return (
    <article className="recipe">
      <h1>{ batch.number }</h1>
      <div>
        <p>{ batch.startDate }</p>
        <p>{ batch.endDate }</p>
        <p>{ batch.students.count }</p>
      </div>
    </article>
  )
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

export default BatchesContainer
