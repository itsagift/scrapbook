import Masonry from 'react-masonry-css';

function AlbumCards({albumCards}){

  const breakpointColumnsObj = {
    default: 5,
    1100: 3,
    700: 2,
    500: 1
  };

  return(
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="album-page-grid"
      columnClassName="album-page-column">
      {albumCards.map((card)=> {
        return (
          <div>
          <img src={card.card.image_url}></img>
          </div>
        )
      })}
    </Masonry>
  )
}

export default AlbumCards