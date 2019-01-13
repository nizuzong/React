import React, { Component } from 'react';
import Index from './index.jsx';

class Demo extends Component {
    constructor () {
        super()
        this.state = {
            name: '赵柳',
            dataList: [
                {
                    "coursewareId":null,
                    "coursewareSegments":null,
                    "handType":null,
                    "isAll":1,
                    "practiceMethod":null,
                    "segmentsNum":null,
                    "segmentsTotal":null,
                    "userPlayLogList":[
                        {
                            "handType":0,
                            "playStep":3,
                            "playTimes":6,
                            "precisionRate":100,
                            "rhythmNum":100,
                            "strengthType":null,
                            "stuId":"0000000000000000000000student271",
                            "stuName":"学生0001",
                            "wrongCount":null
                        },
                        {
                            "handType":0,
                            "playStep":4,
                            "playTimes":1,
                            "precisionRate":100,
                            "rhythmNum":0,
                            "strengthType":null,
                            "stuId":"0000000000000000000000student271",
                            "stuName":"学生0001",
                            "wrongCount":null
                        }
                    ]
                },
                {
                    "coursewareId":null,
                    "coursewareSegments":"1,2",
                    "handType":0,
                    "isAll":0,
                    "practiceMethod":null,
                    "segmentsNum":1,
                    "segmentsTotal":null,
                    "userPlayLogList":[
                        {
                            "handType":0,
                            "playStep":1,
                            "playTimes":1,
                            "precisionRate":100,
                            "rhythmNum":0,
                            "strengthType":null,
                            "stuId":"0000000000000000000000student271",
                            "stuName":"学生0001",
                            "wrongCount":null
                        }]
                    }
                ]
            }
    }
    render () {
        const { dataList } = this.state;
        return (
            <div>
                {
                    dataList && dataList.map((res,idx) => {
                        console.log(res)
                        if(res.isAll === 1) {
                            console.log(11111111)
                            {
                                res.userPlayLogList.map((item,key) => {
                                    return (
                                        <div >{item.stuName}1</div>
                                    )
                                })
                            }
                            
                        } else if (res.isAll === 0){
                            {
                                res.userPlayLogList.map((item,key) => {
                                    return (
                                        <div>{item.stuName}2</div>
                                    )
                                })
                            }
                        }
                    })
                }
            </div>
        )
    }
}

export default Demo