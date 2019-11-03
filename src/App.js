import React from 'react';
import './App.css';
import Main from './Main.js'
class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {page: 'main'};
  }

  setPage(e, newpage){
    e.preventDefault();
    this.setState({page: newpage});
  }

  render() {
    return (
      <div className="App">
        {this.state.page == 'main' && (<Main setPage={this.setPage}/>)}
      </div>
    );
  }

}
export default App;
