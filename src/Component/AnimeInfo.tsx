import { Label } from "../utils/Label";

interface Props<Type> {
  anime: Type,
  isPending: boolean,
}

interface Anime {
  aired?: {
    from?: string,
    to?: string,
    string?: string,
    prop?: {
      from: AnimeDate,
      to: AnimeDate, 
    }
  }
  airing?: boolean,
  approved?: boolean,
  broadcast?: BroadcastTime,
  demographics?: AnimeItem[],
  duration?: string,
  episodes?: number,
  eplicit_genres?: string[],
  favorites?: number,
  genres?: AnimeItem[],
  images?: {
    jpg: AnimeImage,
    webp: AnimeImage,
  },
  licensors?: AnimeItem[],
  mal_id?: number,
  members?: number,
  popularity?: number,
  producers?: AnimeItem[],
  rank?: number,
  rating?: string,
  score?: number,
  season?: string,
  source?: string,
  status?: string,
  studios?: AnimeItem[],
  synopsis?: string,
  themes?: string[],
  title?: string,
  title_english?: string,
  title_japanese?: string,
  title_synonyms?: string[],
  titles?: AnimeTitle[],
  trailer?: any,
  type?: string,
  url?: string,
  year?: number,
}

interface AnimeItem {
  mal_id: number,
  name: string,
  type: string,
  url: string,
}

interface AnimeTitle {
  title: string,
  type: string,
}

interface AnimeImage {
  image_url: string,
  large_image_url: string,
  small_image_url: string,
}

interface BroadcastTime {
  day: number,
  string: string,
  time: string,
  timezone: string,
}

interface AnimeDate {
  day: number,
  month: number,
  year: number,
}

export function AnimeInfo({anime, isPending}:Props<Anime>) {  
  const isAnimeNotEmpty = Object.keys(anime).length > 0;
  const opacity = isPending ? 'opacity-0': '';
  
  if(!anime) {
   console.log(anime);
  }
  if (!isAnimeNotEmpty) {
    return <div className={`flex flex-col items-center gap-2 h-[800px] transition-opacity ${opacity}`}></div>
  }
  
  return (
    <div className={`flex flex-col md:flex-row md:items-stretch gap-2 md:h-[600px] items-center transition-opacity  ${opacity}`}>
      <a  href={anime.url} target="_blank" className="relative h-[600px] md:w-[400px] shrink-0">
        <img className="z-0 h-full w-full" src={anime.images?.webp.large_image_url || ""} alt="" />
        <div className="absolute bottom-0 w-full p-4 text-xl bg-black bg-opacity-75 text-white font-bold">
          <h1 className="text-xl text-extrabold">{anime.title}</h1>
          <h3 className="text-lg">{anime.title_japanese}</h3>
          <h3 className="text-sm mix-blend-difference">{anime?.type || "unknown"} - {anime?.rating?.split(" ")[0]}</h3> 
        </div>
      </a>
      <div className="text-zinc-800 w-full">
        <div className="flex gap-2 justify-center">
          <Label className="text-white bg-red-900">
            {anime.status}
          </Label>
          <div className="text-center ">
            Rating: <span className="font-bold">{anime.score === null ? "0.00" : anime.score}</span>
          </div>
          <div>
            Episodes: <b>{anime.episodes}</b>
          </div>
        </div>
        <div className="h-40 md:h-full align-middle text-justify px-3 text-zinc-700 font-overpass overflow-y-scroll">
          {anime.synopsis}
        </div>
      </div>
    </div>
  )
}
