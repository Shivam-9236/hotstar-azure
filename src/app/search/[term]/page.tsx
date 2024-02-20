import MovieCarousel from "@/components/MovieCarousel";
import { getPopularMovies, getSearchedMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation";

type Props={
    params:{
        term:string;
    }
}

async function SearchPage({params:{term}} :Props) {
    if(!term)notFound();
    const termtouse=decodeURI(term);

    // API to call Search Movies
    const movies=await getSearchedMovies(termtouse);
    // API to call Popular Movies
    const popularMovies=await getPopularMovies();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-4 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold px-10">Results for {termtouse} </h1>

        {/* ai suggestion */}
        
        <MovieCarousel title="Movies" movies={movies} isVertical />
        <MovieCarousel title="You may also like" movies={popularMovies} />
      </div>
    </div>
  )
}

export default SearchPage