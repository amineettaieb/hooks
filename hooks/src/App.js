import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList';

function App() {
  const  movieList =[{
    title:'kingkong',
    id : 1,
    description: '',
    rate :5,
  }
  ]
  
  return (
    <div className="App">
      <MovieList />
    </div>
  );
}

export default App;
