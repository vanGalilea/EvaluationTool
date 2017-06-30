import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import BatchesContainer from './BatchesContainer'

chai.use(chaiEnzyme())

describe('<BatchesContainer />', () => {
  const batches = shallow(<BatchesContainer />)

  it('has a wrapping h2 tag', () => {
    expect(batches).to.have.tagName('h2')
  })

  // it('renders the content', () => {
  //   expect(batches).to.have.text('All Batches:')
  // })
})
