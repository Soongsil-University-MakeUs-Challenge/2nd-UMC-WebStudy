import React, { Component } from 'react';

class Bottom extends Component {
    render() {
        return (
            <div className='bottom'>
                <div className='bottom_rectangle'>
                    <div className="bottom_title">
                        Contact Info
                    </div>

                    <div className="bottom_detail">
                        공식 메일 : danjang@ukov.kr<br/>
                        카카오톡 플러스 친구 : UKOV 대학생벤처기사단
                    </div>

                    <div className="bottom_plus">
                        Copyright©2020 ukov. All right reserved
                    </div>
                </div>
            </div>
        );
    }
}

export default Bottom;