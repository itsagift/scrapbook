import Masonry from 'react-masonry-css';
import {Link} from 'react-router-dom';

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
          
          <div className='album-page-img'>
          <Link to={`${card.card.id}`}>
          <img src={card.card.image_url}></img>
          </Link>
          </div>
          
        )
      })}
    </Masonry>
  )
}

export default AlbumCards