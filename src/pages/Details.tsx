import { useEffect, useState } from "react";

type DetailsProps = {
  selectedMovie: number;
};

type MovieDetailsType = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

const Details = ({ selectedMovie }: DetailsProps) => {
  const [movieDetails, setMovieDetails] = useState<MovieDetailsType | null>(
    null
  );
  console.log(movieDetails);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/615656?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.json();
      setMovieDetails(data);
    };
    fetchMovie();
  }, []);

  return (
    <>
      <div className="flex mt-20 gap-x-20 items-center">
        <img
          className="w-[400px]"
          src={`https://image.tmdb.org/t/p/original/${movieDetails?.poster_path}`}
          alt={movieDetails?.title}
        />
        <div>
          <div>
            <h3>{movieDetails?.title}</h3>
            <p>"{movieDetails?.tagline}"</p>
            <p>{movieDetails?.vote_average.toFixed(1)} / 10</p>
            <p>Released Date: {movieDetails?.release_date}</p>
            <p>{movieDetails?.overview}</p>
          </div>
          <div>
            <h4>More Info</h4>
            <p>Budget: ${movieDetails?.budget.toLocaleString()}</p>
            <p>Revenue: ${movieDetails?.revenue.toLocaleString()}</p>
            <p>Runtime: {movieDetails?.runtime} minutes</p>
            <p>Status: {movieDetails?.status}</p>
            <h4>Production Companies</h4>
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
