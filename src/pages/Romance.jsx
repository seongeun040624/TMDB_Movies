import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

import './romance.scss'

const Romance = () => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const [romance, setRomance] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get( `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=10749&language=ko-KR`)
        .then(res => {
            console.log(res.data.results);
            setRomance(res.data.results);
            setIsLoading(false);
        })
        .catch(err => {
            console.error(err);
            setIsLoading(false);
        });
    }, []);
    return (
        <div className='romance'>
           <h2>로맨스 장르</h2>
           {isLoading ? (<p>로딩중...</p>) : (
                <div className="romanceList">
                    {
                        romance.map((romanceitem) => (
                            <div className='romanceListDetail' key={romanceitem.id}>
                                <Link to={`/romanceDetail/${romanceitem.id}`}>
                                    <img src={`https://image.tmdb.org/t/p/w185${romanceitem.poster_path}`} alt={romanceitem.original_name} />
                                    <span className="romanceTitle">{romanceitem.name}</span>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            )}
        </div>
    );
};

export default Romance;