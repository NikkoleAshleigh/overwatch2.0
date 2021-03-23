import { useEffect, useState } from "react";
import axios from "axios";
import {
  TextField,
  Grid,
  Button,
  Typography,
  Card,
  CardContent,
} from "@material-ui/core";
import LineChart from './lineChart';

function App() {
  const [todos, setTodos] = useState([
    { title: "test", description: "fuckin hell" },
  ]);
const [title, setTitle] = useState('')
const [description, setDescription] = useState('')

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


// ========= get all========================  

const fetchAllTodos = ()=>{
  axios
    .get("http://localhost:8000/api/todos")
    .then((result) => setTodos(result.data));
}

// ============= create one =====================
const addTodoItem =()=>{
let body ={
  title,
  description 
}

  axios.post("http://localhost:8000/api/todos/", body)
    .then((result) => console.log(result.data));
}
 


  useEffect(() => {
  fetchAllTodos()
  }, []);




  return (
    <Grid container xs={12} sm={12}>
    <Grid
      container
      item
      xs={12}
      spacing={4}
      align="center"
    
    >
      <Grid item xs={12} align="center">
        <TextField
          id="outlined-secondary"
          label="Title"
          variant="outlined"
          color="primary"
          onChange={(e) => setTitle(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} align="center">
        <TextField
          id="outlined-secondary"
          label="Description"
          variant="outlined"
          color="primary"
          onChange={(e) => setDescription(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} align="center">
      <Button onClick={()=> addTodoItem()}>add item</Button>
      </Grid>
    </Grid>

      {todos.map((todoItem, index) => {
        return (
          <Card>
            <CardContent>
              <Typography variant="h1">{"test"}</Typography>
              <Typography variant="body2" component="p">
                {todoItem.description}
              </Typography>
            </CardContent>
          </Card>
          
        );
      })}
      <LineChart data={todos}/>
    </Grid>
  );
}

export default App;
