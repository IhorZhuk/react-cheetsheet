import React from 'react';

type TProps = {
  count: number;
}

class NotifierCountPure extends React.PureComponent<TProps> {
  render() {
    return <div>{this.props.count}</div>
  }
}

const NotifierFn: React.FC<TProps> = ({count}) => (
  <div>{count}</div>
)

const Memoized = React.memo(NotifierFn);
