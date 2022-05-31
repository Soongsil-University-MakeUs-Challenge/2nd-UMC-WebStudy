import React, { Component } from 'react';

class Body extends Component {
    render() {
        return (
            <div className="rectangle">
                <div className="rec_title">
                    11년의 여정
                </div>
                <div className="rec_detail">
                    우리는 주체적으로 배우고 변화에 도전하면서<br/>
                    스타트업 생태계를 위한 인재를 배출해내고 있습니다.
                </div>
                
                <div className="rectangle_component">
                    <div className="history">
                        <div className="history_title">
                            11년
                        </div>
                        <div>
                            역사
                        </div>
                    </div>
                    <div className="slash_1">/</div>
                    <div className="member">
                        <div className="member_title">
                            190명
                        </div>
                        <div>
                            누적멤버
                        </div>
                    </div>
                    <div className="slash_2">/</div>
                    <div className="mini_progect">
                        <div className="mini_project_title">
                            23건
                        </div>
                        <div>
                            미니프로젝트
                        </div>
                    </div>
                </div>
            </div>
        );  
    }
}

export default Body;