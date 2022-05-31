import React, { Component } from 'react';

class Review extends Component {
    render() {
        return (
            <div className="review">
                <div className="review_title">
                    UKOV 후기
                </div>

                <div className='review_detail'>
                    더 많은 후기 보러가기
                </div>
                <div className='review_component'>
                    <div className='review_1'>
                        <div className='review_1_rectangle'></div>
                        <div className='UKOV22'>UKOV 22기</div>
                        <div className='review_1_detail'>
                            유일한 졸업생 단원이 전하는 후기 글이 넘치면 이렇게 줄여서…
                        </div>
                    </div>

                    <div className='review_2'>
                        <div className='review_2_rectangle'></div>
                        <div className='UKOV22'>UKOV 22기</div>
                        <div className='review_2_detail'>
                        유코브 선배들이 알려주는 유코브 합격꿀팁!
                        </div>
                    </div>

                    <div className='review_3'>
                        <div className='review_3_rectangle'></div>
                        <div className='UKOV22'>UKOV 22기</div>
                        <div className='review_3_detail'>
                        유코브 선배들이 알려주는 유코브 합격꿀팁!
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Review;