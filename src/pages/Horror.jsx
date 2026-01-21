import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

import './horror.scss'

const Horror = () => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const [horror, setHorror] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get( `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27&language=ko-KR`)
        .then(res => {
            console.log(res.data.results);
            setHorror(res.data.results);
            setIsLoading(false);
        })
        .catch(err => {
            console.error(err);
            setIsLoading(false);
        });
    }, []);
    return (
        <div className='horror'>
           <h2>공포 장르</h2>
           {isLoading ? (<p>로딩중...</p>) : (
                <div className="horrorList">
                    {
                        horror.map((horroritem) => (
                            <div className='horrorListDetail' key={horroritem.id}>
                                <Link to={`/horrorDetail/${horroritem.id}`}>
                                    <img src={`https://image.tmdb.org/t/p/w185${horroritem.poster_path}`} alt={horroritem.original_name} />
                                    <span className="horrorTitle">{horroritem.name}</span>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            )}
        </div>
    );
};

export default Horror;