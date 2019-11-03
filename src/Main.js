import React from 'react';

export default class Main extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <button onClick={(e) => this.props.setPage(e, 'Join')}>Join</button>
        <p></p>
        <button onClick={(e) => this.props.setPage(e, 'Join')}>Create</button>
      </div>);
  }
}
