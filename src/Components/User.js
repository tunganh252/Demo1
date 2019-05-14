import React, {Component} from 'react'
import styled from 'styled-components'

import icon_drag from './../Assets/images/ic_drag.svg'
import ItemUser from './ItemUser';

const MainContener = styled.div `
  background-color:#194341;
  height:auto;
  .slideScroll{
    max-width:100%;
    display: flex;
     padding: 115px 0 0 33px;
     overflow: hidden;
    .itemCount{
      width: 150px;
      height: 200px;
      border-radius: 2px;
      border: solid 5px #fff;
      background-color: #5bc3bf;
      .countNumber{
        display: flex;
        justify-content: center;
        width: 125px;
        height: 127px;
        font-family: Arial;
        font-size: 90px;
        font-weight: 900;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.41;
        letter-spacing: 2px;
        color: #fff;
        padding: 15px 11px 0 11px;
      }
      .countName{
        width: 54px;
        height: 36px;
        font-family: SVN-Rajdhani;
        display: flex;
        justify-content: center;
        font-size: 28px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        letter-spacing: 1px;
        color: #fff;
        margin: 0 auto;
      }
    }
    #mousewheel {
      width:100%
    }
  }
  .BlockDrag{
    display: flex;
    align-items: center;
    flex-direction:column;
    margin-top:45px;
    img{
      width: 75.8px;
      height: 80px;
      opacity: 0.5;
    }
    p {
      opacity: 0.5;
      font-family: OpesanBold;
      font-size: 18px;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.33;
      letter-spacing: 0.2px;
      color: #fff;
      text-transform:uppercase;
      margin-bottom:33px;
    }
  }
`;

export default class User extends Component {

    renderItem = () => {
        return this
            .props
            .UserData
            .map((item, index) => {
                return (<ItemUser key={index} UserData={item}/>)

            });
    }

    onDragOver = (e) => {
        e.preventDefault();
    }
    
    onDropa = (e) => {
        e.preventDefault();
        let data = e
            .dataTransfer
            .getData("text/plain");
            this.setState({dataId: data})
        let newData = 
            this.props.UserData
            .filter(item => {
                return (item.id !== Number(data))
            })

        console.log('drop --> dataId:', data);
        console.log('newData', newData);
        
        this
            .props
            .UpdateUser(newData);

            

    }

    // Html Dom
    scrollHorizontal = (e) => {
        // console.log(e);
        // console.log('eventX', e.deltaX);
        // console.log('eventY', e.deltaY);
        // console.log('currenttarget', e.currentTarget.scrollLeft);
        if (e.deltaY < 0) {
            e.currentTarget.scrollLeft -= 100
        } else {
            e.currentTarget.scrollLeft += 100
        }
    }
    render() {
        return (
            <MainContener
                onDrop={(event) => this.onDropa(event)}
                onDragOver={(event) => this.onDragOver(event)}>
                <div className='slideScroll' onWheel={(e) => this.scrollHorizontal(e)}>
                    <div className='itemCount'>
                        <div className='countNumber'>
                            {this.props.UserData.length}
                        </div>
                        <div className='countName'>
                            PAX
                        </div>
                    </div>
                    {this.renderItem()}
                </div>
                <div className='BlockDrag'>
                    <img alt="drag" src={icon_drag}></img>
                    <p>Kéo hình ra khỏI hàng chạy để xoá</p>
                </div>
            </MainContener>
        )
    }
}
