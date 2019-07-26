import React,{useState} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from 'material-ui-search-bar';

var teams = [
  {name: 'Team 1', projects: [
    {name: 'project 1', designs: [
      {name: 'test 1', size: '123 MB'},
      {name: 'wow 2', size: '23 MB'},
      {name: 'wow 3', size: '153 MB'},
      {name: 'hmmm 3', size: '3 MB'}
    ]},
    {name: 'project 2', designs: [
      {name: 'test a', size: '123 MB'},
      {name: 'test b', size: '432 MB'},
    ]},
  ]},
  {name: 'Team 2', projects: [
    {name: 'project a', designs: [
      {name: 'hello test xyz', size: '55 MB'},
      {name: 'test 5 xyz', size: '15 MB'},
      {name: 'hmmm 6 xyz', size: '23 MB'}
    ]},
    {name: 'project b', designs: []},
  ]},
  {name: 'Team 3', projects: []}
];



function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by the '}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {' team.'}
    </Typography>
  );
}

const ShowData =(props) =>{
  console.log("thinks are working");
  return (
    <div>
    {props.teamData.map(team =>(
           team.projects
    ))

    
    }
   </div>
    
    )
}



class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      data :teams
    }
  }

render(){
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v4-beta example
        </Typography>
        <ProTip />
        <MadeWithLove />
      </Box>
    
      <SearchBar
      onChange={() => console.log('onChange')}
      onRequestSearch={() => console.log('onRequestSearch')}
      style={{
        margin: '30px auto',
        maxWidth: 800
      }}
    />
    <ShowData teamData ={this.state.data}/>
    </Container>
  );
}
}
export default App;
