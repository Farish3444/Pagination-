import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { getGenres } from './fakeGenreService';

class GenreList extends Component {
    state = { genreMovie:getGenres() }
    render() { 
        const {genreMovie}=this.state;
        const { items,onItemSelect,selectedItem} = this.props;

        return ( 
            <div className="col-3">
<ul class="list-group">
 {genreMovie.map(g =>(
     <li 
     className={g === selectedItem ? "list-group-item active":"list-group-item"}
     key={g._id} 
     onClick={()=>{onItemSelect(g)}} 
     style={{cursor:'pointer'}}
     >
     {g.name}
     </li>
 ))}
</ul>
            </div>
         );
    }
}
 
export default GenreList;
{/* <li class="list-group-item active" aria-current="true">Action</li>
<li class="list-group-item">Thriller</li>
<li class="list-group-item">Comedy</li> */}