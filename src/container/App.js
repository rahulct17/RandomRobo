import React,{Component} from 'react';
import CardList from '../component/CardList';
import Scroll from '../component/Scroll';
import SearchBox from '../component/SearchBox';
import './App.css';




class App extends Component {
  constructor(){
    super()
    this.state={
      robots:[],
      searchfield: ''
    }
  }
  componentDidMount() {
   fetch('https://jsonplaceholder.typicode.com/users')
     .then(response=> response.json())
     .then(users => {this.setState({ robots: users})});
 }

  onSearchChange= (event) =>{
     this.setState=({searchfield : event.target.value });

  }
  render() {

    const {robots , searchfield}= this.state;
   const filterdrobots =robots.filter(robot=>{
     return robot.name.toLowerCase().includes(searchfield.toLowerCase());
   })
    return(
    <div className='tc'>
    <h1>RandomRobo</h1>
    <SearchBox  searchChange={this.onSearchChange}/>
    <Scroll>
      <CardList robots = {filterdrobots}/>
      </Scroll>
      </div>
    );
  }
}


export default App;
