import React, { Component } from 'react';

class Program extends Component {
    render() {
        return (
            <div className="program">
                <div className="program_title">
                    프로그램
                </div>

                <div className='program_detail'>
                    유코브 단원이 되면 다음과 같은 프로그램을 함께합니다.
                </div>
                <div className='program_component'>
                    <div className='program_1'>
                        <div className='program_1_rectangle' />
                        <div className='test'>
                        <h1 className='program_1_title'>
                            스타트업 인턴십
                        </h1>
                        <p className='program_1_detail'>
                           <div> 소프트뱅크벤처스가 투자한</div>
                            엄선된 스타트업에서<br/>
                            인턴십을 수행합니다.
                        </p>
                        </div>
                    </div>

                    <div className='program_2'>
                        <div className='program_2_rectangle'></div>
                        <div className='program_2_title'>
                            미니 스타트업
                        </div>
                    </div>

                    <div className='program_3'>
                        <div className='program_3_rectangle'></div>
                        <div className='program_3_title'>
                            네트워킹
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Program;