import { useState,useEffect } from 'react';
import { GifData } from "../../types/typeApp";



const Favorites: React.FC = () => {

    const [favorites, setFavorites] = useState<GifData[]>();

    useEffect(() => {
        const favorites = localStorage.getItem('favorites') || '';

        setFavorites(JSON.parse(favorites));
    },[]);

    return (
        <div style={{ height:'100vh' }}>
            {
                favorites &&  
                    <ul>
                        {
                            favorites.map(favorite => (
                                <li key={favorite.id}>{favorite.title}</li>
                            ))
                        }
                    </ul>
                    // <Result 
                    //     data={ favorites }
                    //     setPage={ setPage }
                    //     isLoading={ isLoading }
                    //     status='FAVORITE'/>
                    
            }          
        </div>
    )
}

export default Favorites;
