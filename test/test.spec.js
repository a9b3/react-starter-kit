import React from 'react'
import should from 'should'
import { shallow } from 'enzyme'

describe('write tests', () => {
  it('render dom without a problems', async () => {
    const root = shallow(<div />)
    should.exist(root)
    root.find('div').length.should.equal(1)
  })
})
