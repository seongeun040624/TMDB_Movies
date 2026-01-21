import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

import './drama.scss'

const Drama = () => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const [drama, setDrama] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get( `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=ko-KR`)
        .then(res => {
            console.log(res.data.results);
            setDrama(res.data.results);
            setIsLoading(false);
        })
        .catch(err => {
            console.error(err);
            setIsLoading(false);
        });
    }, []);
    return (
        <div className='drama'>
           <h2>Tv 프로그램</h2>
           {isLoading ? (
                <p>로딩중...</p>
            ) : (
                <div className="dramaItem">
                    {
                        drama.map((item) => (
                            <div className='dramaimgWrap' key={item.id}>
                                <Link to={`/DramaDetail/${item.id}`}>
                                    <img src={`https://image.tmdb.org/t/p/w185${item.poster_path}`} alt={item.original_name} />
                                    <span className="dramaTitle">{item.name}</span>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            )
               
           }
        </div>
    );
};

export default Drama;