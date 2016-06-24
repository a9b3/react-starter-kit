import React from 'react'
import TestUtils from 'react-addons-test-utils'
import should from 'should'

describe('write tests', () => {
  it('render dom without a problems', async () => {
    const root = TestUtils.renderIntoDocument(<div />)
    should.exist(root)
  })
})
