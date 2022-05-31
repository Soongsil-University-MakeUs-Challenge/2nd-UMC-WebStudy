import React, { Component } from 'react';
import Body from './body';
import Bottom from './bottom';
import Header from './header';
import Join from './join';
import Partner from './partner';
import Program from './program';
import Review from './review';

class Ukov extends Component {
    render() {
        return (
            <div className="Ukov">
                <Header />

                <main className="introduce">
                    <div className="big_title">
                        우리는 대학생<br/>
                        벤처기사단입니다.
                    </div>

                    <div className="detail">
                        UKOV는 Undergrautated Knight of Ventures의 약자로,<br/>
                        소프트뱅크 벤처스의 후원 아래 엄선된 스타트업의 일을 돕고 함께 성장해 나가는 대외활동입니다.
                    </div>

                    <div className="small_title">
                        <div className="small_title_1">
                         UKOV 미션
                        </div>
                        <div className="small_title_2">
                         UKOV 비전
                        </div>
                    </div>

                    <div className="small_detail">
                        <div className="small_detail_1">
                            <div className="small_text_1">더 많은 사람들이 스타트업 생태계로 Soft-landing 하는 것</div><br/>
                            스타트업 인턴십을 통해 스타트업의 현장을 피부로 느끼고<br/>
                            개인에게 맞는 일을 탐색합니다.<br/>
                            또한 동기들과의 협업 프로젝트를 통해 업무 협력성을 기르고<br/>
                            세상을 보는 시야를 확장합니다.
                        </div>

                        <div className="small_detail_2">
                            <div className="small_text_2">스타트업을 통해 세상에 더 많은 긍정적 영향을 미치는 것</div><br/>
                            성공적인 스타트업 생태계 구성원이 되는 성장의 경험을<br/>
                            제공해주는 것을 목표로 합니다.<br/>
                            그 성장 싸이클을 통해 양질의 인재로 거듭나<br/>
                            세상을 바꾸는 사람들이 되는 것을 꿈꿉니다.
                        </div>
                    </div>
                </main>

                <Body />

                <Review />

                <Program />

                <Partner />

                <Join />

                <Bottom />

            </div>

        );
    }
}

export default Ukov;