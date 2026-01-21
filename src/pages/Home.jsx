import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

import './home.scss';

// import required modules
import { Autoplay, FreeMode, } from 'swiper/modules';

const Home = () => {
    const apikey=import.meta.env.VITE_API_KEY;

    const [appMovie, setAppMovie] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [randomMovie, setRandoMovie]=useState(null);
    const [recommend, setRecommend] = useState([]);
    const [visibleMovies, setVisibleMovies]=useState(5);
    const [searchWord, setSearchWord] = useState('');


    const search = () => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=ko&query=${searchWord}`)
        .then((rs) => {
            console.log(rs.data.results)
            setAppMovie(rs.data.results)
        })
        .catch((error) => {
            console.error('검색 중 오류 발생 : ', error)
        })
    }

    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            search()
        }
    }

    const getMovies = async () => {
        try{
            const response= await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=ko) `);
            const res= await axios.get(`https://api.themoviedb.org/3/movie/500/recommendations?api_key=${apikey}&language=ko-KR`)
            setAppMovie(response.data.results);
            setRecommend(res.data.results);
            /* console.log(response) */
            console.log(res)
            const movies=response.data.results;
            if(movies.length > 0){
                const randomIndex=Math.floor(Math.random()*movies.length)
                setRandoMovie(movies[randomIndex])
                
            }
           setIsLoading(false)

        }catch(err){
            console.log(err)
            setIsLoading(false)
        }
    }
    useEffect(()=>{
        getMovies()
    },[])
    return (
        <div className='home'>
           {
                isLoading ? (
                    <p className="loding">로딩중.....</p>
                ) : (
                    <div className="upMovie">
                        <div className="upComingImg">
                            {randomMovie && <img src={`https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`}/>}
                        </div>
                        <div className="upComingInfo">
                            <div className="upInfoText">
                                <p className="title">제목 : {randomMovie.original_title}</p>
                                <p className="overview">개요 : {randomMovie.overview}</p>
                                <p className="release_date">개봉일 : {randomMovie.release_date}</p>
                                <p className="vote_average">평점 : {randomMovie.vote_average}</p>
                                <p className="vote_count">좋아요 : {randomMovie.vote_count}</p>
                            </div>
                        </div>
                    </div>
                )
           }
           <div className="search">
                <div className="searchBox">
                    <input type="search" value={searchWord} onChange={(e) => setSearchWord(e.target.value)} onKeyDown={handleKeyPress} placeholder='영화 제목을 입력해 주세요'/>
                    <button className='searchBtn' onClick={search}><IoIosSearch className='searchIcon'/></button>
                </div>
           </div>
           <div className="mainUpComing">
                <h2>상영작</h2>
                <div className="movieList">
                    {
                        isLoading ? (<p className="loding">로딩중.....</p>):(
                            appMovie.slice(0, visibleMovies).map((movieItem)=> (
                                <div className="movieItem" key={movieItem.id}>
                                    <Link to={`/upcomming/${movieItem.id}`}>
                                        <div className="imgWrap">
                                            <img src={`https://image.tmdb.org/t/p/w500${movieItem.poster_path}`} alt={movieItem.title} />
                                        </div>
                                        <div className="textWrap">
                                            <h3>{movieItem.title}</h3>
                                            <p>개봉일 : {movieItem.release_date}</p>
                                            <p className="average">{Math.round(movieItem.vote_average)}</p>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        )
                    }
                </div>
                {
                    appMovie.length > visibleMovies && (
                        <div className="more">
                            <button className="loadMore" onClick={() => setVisibleMovies(visibleMovies+5)}>더보기</button>
                        </div>
                    )
                }
           </div>
           <div className="recommendations">
                <h2>추천 영화</h2>
                <div className="recommendationList">
                    {isLoading ? (<p>로딩중...</p>):(
                        <div className='swiper-navigation'>
                            <Swiper
                                slidesPerView={2}
                                spaceBetween={5}
                                freeMode={true}
                                autoplay= {{
                                    delay: 0,
                                    disableOnInteraction: false
                                }}
                                loop={true}
                                loopAdditionalSlides={0}
                                speed={10000}
                                pagination={{
                                    clickable: true,
                                }}
                                breakpoints={{
                                480: {
                                    slidesPerView: 3,
                                    spaceBetween: 20
                                },
                                780: {
                                    slidesPerView: 4,
                                    spaceBetween: 10
                                },
                                1280: {
                                    slidesPerView: 5,
                                    spaceBetween: 5
                                }
                            }
                                }
                                modules={[FreeMode, Autoplay]}
                                className="mySwiper"
                            >
                                {
                                    recommend.map((rec) => (
                                        <SwiperSlide key={rec.id} className='recommendSlider'>
                                            <Link to={`/recommendDetail/${rec.id}`}>
                                                <img src={`https://image.tmdb.org/t/p/w500${rec.poster_path}`} alt={rec.title} />
                                            </Link>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    )}
                </div>
           </div>
        </div>
    );
};

export default Home;