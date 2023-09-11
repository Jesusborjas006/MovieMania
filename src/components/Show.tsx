type ShowProps = {
  key: number;
  // backdropImg: string;
  // first_air_data: string;
  // genre_ids: number[];
  id: number;
  name: string;
  // original_country: string[];
  // original_language: string;
  // original_name: string;
  // overview: string;
  // popularity: number;
  posterImg: string;
  // vote_average: number;
  // vote_count: number;
};

const Show = ({ id, name, posterImg }: ShowProps) => {
  return (
    <div className="xl:text-lg">
      <img
        className="rounded-md mb-2"
        src={`http://image.tmdb.org/t/p/w500/${posterImg}`}
        alt={name}
      />
      <h2>{name}</h2>
    </div>
  );
};

export default Show;
