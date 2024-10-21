import MovieCard from "./MovieCard";

const MovieList = ({ title, data }) => {
    return (
        <div className="py-2">
            <h1 className="text-2xl font-semibold text-white px-12 py-2">{title}</h1>
            <div className="flex overflow-x-scroll hide-scrollbar ">
              <div className="flex px-12 py-2">
                {
                    data?.map(movie => (
                        <MovieCard key={movie.id} path={movie.poster_path} />
                    ))
                }
            </div>
          </div>
        </div>
    );
};

export default MovieList;