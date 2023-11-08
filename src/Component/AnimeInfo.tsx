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
    <div className="animeCard">
      <div className="animeText">
        <div>
          <h1 className="animeTitle">{anime.title}</h1>
          <h3 className="animeSubtitle">{anime.title_japanese}</h3>
          <div className="animeSynopsis">
            <p>{anime.synopsis}</p>
          </div>
        </div>
        <div className="animeClassification">
          <p>Rating: {anime.rating}</p>
          <p>Type: {anime.type}</p>
          <p>Status: {anime.status}</p>
          <p>Score: {anime.score}</p>
          <p>Source: {anime.source}</p>
          <p>Episodes: {anime.episodes} </p>
        </div>
      </div>

      <a  href={anime.url} target="_blank" className="animeUrl">
        <img className="animeImage" src={anime.images.webp.large_image_url} alt="" />
      </a>
    </div>
  )
}
