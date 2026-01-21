import React from 'react';
import {Link} from 'react-router-dom'
import { RiMovie2Line } from "react-icons/ri";

import './footer.scss'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='f_inner'>
                <div className='f_top'>
                    <h2 className='f_logo'>
                        <Link to='/'><RiMovie2Line /></Link>
                    </h2>
                    <div className="f_menu">
                        <ul>
                            <li><Link to='/'>회사소개</Link></li>
                            <li><Link to='/'>이용약관</Link></li>
                            <li><Link to='/'><strong>개인정보처리방침</strong></Link></li>
                            <li><Link to='/'>이메일무단수집거부</Link></li>
                            <li><Link to='/'>고정형 영상정보처리기기 운영 및 관리방침</Link></li>
                            <li><Link to='/'>채용안내</Link></li>
                            <li><Link to='/'>사회적 책임</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="f_info">
                    <div className="info_title">TMDB 무비스(주)</div>
                    <address>서울특별시 관악구 남부순환로 1627 명진빌딩 2F</address>
                    <div className="info_copy">
                        <p>Copyright &copy;TMDBMovies All Right Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;