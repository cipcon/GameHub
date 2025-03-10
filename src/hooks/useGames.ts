import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// I created this hook to handle the useEffect separately to the components and make it reusable
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (
  selectedGenres: Genre | null,
  selectedPlatform: Platform | null
) =>
  // I have 3 parameters here, the first one is the endpoint, the second one is the query parameters, and the third one is the dependencies
  useData<Game>(
    "/games",
    { params: { genres: selectedGenres?.id, platforms: selectedPlatform?.id } },
    [selectedGenres?.id, selectedPlatform?.id]
  );

export default useGames;
