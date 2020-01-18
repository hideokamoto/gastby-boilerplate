import * as React from 'react';
import { RouteComponentProps } from "@reach/router"

export default (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;