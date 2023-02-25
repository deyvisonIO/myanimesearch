
export function AnimeInfo({anime}:any) {  
  const isAnimeNotEmpty = Object.keys(anime).length > 0;

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

      <a  href={anime.url} target="_blank" ><img className="animeImage" src={anime.images.webp.large_image_url} alt="" /> </a>
    </div>
  )
}