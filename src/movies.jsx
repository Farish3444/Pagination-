import React, { Component } from "react";
import Like from "./like";
import { getMovies } from "./fakeMovieService";
import { genres, getGenres } from './fakeGenreService';
import 'bootstrap/dist/css/bootstrap.min.css'
import Pagination from './Pagination';
import { Paginate } from "./utilis/Paginate";
import PropTypes from 'prop-types';
import GenreList from './GenreList';
import './App.css';

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize:5,
    currentPage:1,
    genres:getGenres(),
    // selectedGenre:movies
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange=page=>{
   this.setState({currentPage:page})
  }

  // removing this.state
  // const {pageSize,movies,currentPage} = this.state

  handleGenreSelect=genre=>{
    this.setState({selectedGenre:genre})
  }
  
  render() {
    
    const { length: count } = this.state.movies; 
    const {movies:allmovies,currentPage,pageSize,selectedGenre} = this.state;
    
    if (count === 0) return <p>There are no movies in the database.</p>;
    
    const filtered =  selectedGenre ? allmovies.filter(m => m.genre._id === selectedGenre):allmovies;
    
    const  movies = Paginate(filtered,currentPage,pageSize); 


    return (
      <React.Fragment>
    <GenreList
      items={this.state.genre}
      selectedItem={this.state.selectedGenre}
      onItemSelect={this.handleGenreSelect}
    />
        <p>Showing {count} movies in the database.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination 
          itemsCount={filtered.length}
          pageSize={this.state.pageSize} 
          onPageChange={this.handlePageChange} 
          currentPage={this.state.currentPage} 
        />
      </React.Fragment>
    );
  }
}

export default Movies;
