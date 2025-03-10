import useData from "./useData";

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

const useGames = () => useData<Game>("/games");

export default useGames;
