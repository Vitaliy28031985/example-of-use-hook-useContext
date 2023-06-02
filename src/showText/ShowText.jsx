import photo from '../images/photo.jpg';
import {useContextMim} from '../Context/Context'

const ShowText = () => {
    const state = useContextMim();


    return (
        <div>
            {state.toggleValue && (
                <div>
                    <img src={photo} alt="photo" />
                    <p>it`s Photo</p>
                </div>  
            )}
            
            <button onClick={() => state.toggle(!state.toggleValue)}>show text and photo</button>
        </div>
    )
}

export default ShowText;