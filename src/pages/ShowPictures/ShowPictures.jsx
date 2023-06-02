import { useContextMim} from "../../Context/Context";

const ShowPictures = () => {
    const state = useContextMim();    
    const posterUrl = `https://image.tmdb.org/t/p/w200`;
     

    return (
        <div className="container">

            {state && (
         <div>
        <h1 className="title-min">Show Videos</h1>
        <ul className="videos-list">
        {state.videosArr.map(({ id, title, poster_path, overview }) =>
        {
        return (
         <li className="item" key={id}>
                <img className="img" src={`${posterUrl}${poster_path}`} alt={title} /> 
                <h2 className="title">{title}</h2> 
                <p className="description">{overview}</p>
                    
        </li>
          )          
        }
        )}
               
        </ul>
        </div>      
            )} 
   
        </div>
    )
}
export default ShowPictures;