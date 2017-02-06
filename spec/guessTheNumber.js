import {expect} from 'chai'
import sinonChai from 'sinon-chai'
import {guessTheNumber} from '../src/guessTheNumber'
import sinon from 'sinon'
import {jsdom} from 'jsdom'
import chai from 'chai'

chai.use(sinonChai)

const doc = jsdom('<!doctype html></html><body></body></html>')
global.document = doc
global.window = doc.defaultView
global.navigator = {
  userAgent: 'node.js'
}
let alert

function generateAlert(x) {
  if (!x) {
    return;
  }

  alert("hi");
}

describe("Guess the Number", () => {

  beforeEach(() => {
    const mysterynumber = 27
    const alert = 1
  })
  it("a gives an alert" , () => {

    generateAlert(true)
  //further clarification is needed as to why [0][0] is required
    expect(alert[0][0]).to.equal('fdsfad')
  })




  it("a gives the right alert when the number is correct" , () => {
  // const docInput = '32'
    // console.log('docInput in test ' + docInput)
    // console.log('alert in test  ' + alert)
    // console.log('guessTheNumber  ' + guessTheNumber('50','74'))
    //
    //   console.log('alert here ' + alert)
    generateAlert(true)
  //further clarification is needed as to why [0][0] is required
    expect(guessTheNumber('50','75')).to.equal('fdsfad')
  })








})
