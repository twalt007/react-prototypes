import React, {Component} from "react";
import Movie from "./movie";
import axios from "axios"

class MoviesContainer extends Component{
    constructor (props){
        super (props);

        this.state ={
            movies:[]
        }
    }
    componentDidMount(e){
        const apiUrl = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json'
        axios.get(apiUrl).then((resp)=>{
            console.log("api response",resp);
            this.setState({
                movies: resp.data.feed.entry
            });
        });
    }
    render (){
        console.log("The State is: ", this.state);
        const movieList = this.state.movies.map((movieInfo,index)=>{
            return <Movie info={movieInfo} key={index} />
        })
        return(
            <div>
                {movieList};
            </div>
        )
    }
}
export default MoviesContainer;