import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

import './action.scss'

const Action = () => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const [action, setAction] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get( `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28&language=ko-KR`)
        .then(res => {
            console.log(res.data.results);
            setAction(res.data.results);
            setIsLoading(false);
        })
        .catch(err => {
            console.error(err);
            setIsLoading(false);
        });
    }, []);
    return (
        <div className='action'>
           <h2>액션 장르</h2>
           {isLoading ? (<p>로딩중...</p>) : (
                <div className="actionList">
                    {
                        action.map((actionitem) => (
                            <div className='actionListDetail' key={actionitem.id}>
                                <Link to={`/actionDetail/${actionitem.id}`}>
                                    <img src={`https://image.tmdb.org/t/p/w185${actionitem.poster_path}`} alt={actionitem.original_name} />
                                    <span className="actionTitle">{actionitem.name}</span>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            )}
        </div>
    );
};

export default Action;