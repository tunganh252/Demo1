import React, {Component} from 'react'
import styled from 'styled-components'
import icon_logo from './../Assets/images/logo_vinpearl.svg'
import icon_menu from './../Assets/images/ic_menu.svg'

const HeaderContainer = styled.div `
  display: flex;
  width:100%;
  height: 108px;
  .BlockLogo{
    width: 108px;
    background-color: #fbab18;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .BlockTitle{
    width:100%;
    background-color: #0a312f;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform:uppercase;
    font-size:48px;
    line-height:56px;
    letter-spacing:4px;
    color:#fff;
    font-family: Lucida;
    font-weight:bold;
  }
  .BlockMenu{
    width:108px;
    background-color:#0a312f;
    border-left: 1.5px solid gray;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default class Header extends Component {
    render() {
        return (
                <HeaderContainer>
                    <div className='BlockLogo'>
                        <a href="/">
                            <img alt="logo" src={icon_logo}></img>
                        </a>
                    </div>
                    <div className='BlockTitle'>VINPEARL CONTROL ACCESS</div>
                    <div className='BlockMenu'>
                        <a href="/">
                            <img alt="menu" src={icon_menu}></img>
                        </a>
                    </div>
                </HeaderContainer>
        )
    }
}
