import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };

    //async 비동기함수 , await 작업 끝날때까지 기다리게한다.
    //이렇게 안하면 자바스크립트는 이 함수를 기다리지않음.
    getMovies = async () => {
        const {
            data: {
                data: { movies }
            }
        } = await axios.get(
            "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
        );
        this.setState({ movies, isLoading: false });
    };
    componentDidMount() {
        this.getMovies();
    }
    render() {
        const { isLoading, movies } = this.state;
        return (
            //처음 isLoading state는 true상태이므로 Loading... 이 뜨고 그후 componentDidMount()에서 getMovies()가 실행되고 바뀐 state로 render된다.
            <section className="container">
                {isLoading ? (
                    <div class="loader">
                        <span class="loader__text">Loading...</span>
                    </div>
                ) : (
                    <div class="movies">
                        {movies.map(movie => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                            />
                        ))}
                    </div>
                )}
            </section>
        );
    }
}

export default App;