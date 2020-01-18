import * as React from 'react';
import { Router, RouteComponentProps } from "@reach/router"

const Home: React.FC = () => (
  <h2>Home</h2>
)
const Page1: React.FC = () => (
  <h2>Page1</h2>
)
const Page2: React.FC = () => (
  <h2>Page2</h2>
)

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

const base = '/admin'
export default () => (
  <Router>
    <RouterPage path={`${base}/page1`} pageComponent={<Page1 />} />
    <RouterPage path={`${base}/page2`} pageComponent={<Page2 />} />
    <RouterPage path={`${base}`} pageComponent={<Home />} />
  </Router>
)