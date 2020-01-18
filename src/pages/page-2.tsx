import React from "react"
import { Link } from "gatsby"
import { connect } from 'react-redux'
import Layout from "../components/layout"
import SEO from "../components/seo"
import * as first from '../modules/index'
import {
  State
} from '../store/index'

const IndexPage = ({count, add, reduce, reset}: ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>) => (
  <Layout>
    <h1>Hi people {count}</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <button onClick={() => add(1)}>add</button>
    <button onClick={() => reduce(1)}>reduce</button>
    <button onClick={() => reset()}>reset</button>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

const mapStateToProps = (state: State) => {
  return {
    count: state.first.count
  }
}
const mapDispatchToProps = (dispatch: Function) => ({
  add: (num: number) => dispatch(first.add(num)),
  reduce: (num: number) => dispatch(first.reduce(num)),
  reset: () => dispatch(first.reset()),
})

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)