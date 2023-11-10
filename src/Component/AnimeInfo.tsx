import { Label } from "../utils/Label";

interface Props<Type> {
  anime: Type,
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

export function AnimeInfo({anime}:Props<Anime>) {  
  const isAnimeNotEmpty = Object.keys(anime).length > 0;
  
  if(!anime) {
   console.log(anime);
  }
  if (!isAnimeNotEmpty) {
    return null;
  }
  
  console.log(anime);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="">
        <div className="font-mono">
          <p>{anime.synopsis}</p>
        </div>
        <div className="flex gap-2 justify-center">
          <Label className="text-white bg-red-500">
            {anime.rating}
          </Label>
          <Label className="text-white bg-red-500">
            {anime.type}
          </Label>
          <Label className="text-white bg-red-500">
            {anime.status}
          </Label>
          <Label className="text-white bg-red-500">
            {anime.score === null ? "0.00" : anime.score}
          </Label>
          <Label className="text-white bg-red-500">
            {anime.source}
          </Label>
          <Label className=" text-white bg-red-500">
            {anime.episodes}
          </Label>
        </div>
      </div>
      <a  href={anime.url} target="_blank" className="relative">
        <img className="z-0" src={anime.images.webp.large_image_url} alt="" />
        <div className="absolute bottom-0 w-full p-4 text-xl bg-black bg-opacity-75 text-white font-bold">
          <h1 className="text-xl text-extrabold">{anime.title}</h1>
          <h3 className="animeSubtitle">{anime.title_japanese}</h3>
        </div>
      </a>
    </div>
  )
}
