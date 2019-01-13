import React, { Component } from 'react';

class Index extends Component {
    constructor () {
        super()
        this.state = {
            name: '张三',
            Updata: '更新前'
        }
        
    }
    //新出来的生命周期函数   主要解决的是componentWillReceiveProps 中判断前后两个 props 是否相同，
    //如果不同再将新的 props 更新到相应的 state 上去。这样做一来会破坏 state 数据的单一数据源，导致组件状态变得不可预测，
    //另一方面也会增加组件的重绘次数。类似的业务需求也有很多，如一个可以横向滑动的列表，当前高亮的 Tab 显然隶属于列表自身的状态，但很多情况下，
    //业务需求会要求从外部跳转至列表时，根据传入的某个值，直接定位到某个 Tab
    static getDerivedStateFromProps(nextProps,prevState) {
        if(nextProps.params !== prevState.name) {
            return {
                name: nextProps.params
            }
        }
        return null
            console.log( nextProps, prevState)
    }
    componentDidUpdate (prevProps, prevState) {
        if (!prevProps.prams && prevState.name) {
            this.handelUpdata();
        }
        console.log(prevProps,prevState)
    }
    listRef = null;

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevProps,prevState)
    
    // if (prevProps.list.length < this.props.list.length) {
    //   return (
    //     this.listRef.scrollHeight - this.listRef.scrollTop
    //   );
    // }
    return null;
  }
    handelUpdata = () => {
        console.log('调用了')
    }
    // componentWillReceiveProps(props) {
    //     console.log(props)
    // }
    handelClickUpdata = () => {
        this.setState({
            Updata: '更新后'
        })
    };

    render () {
        return (
            <div>
                <div onClick={ this.handelClickUpdata }>点我更新组件</div>
                <div>{ this.state.Updata }</div>
                {this.state.name}
            </div>
        )
    }
}

export default Index