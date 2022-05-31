import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <img className="logo" src="img/ukov_logo.png" />
                <nav className='navigation'>
                    <span className="home">홈</span>
                    <span className="program">프로그램</span>
                    <span className="recrewiting">리쿠르팅</span>
                </nav>
            </header>
        );
    }
}

export default Header;