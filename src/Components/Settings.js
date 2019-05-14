import React, {Component} from 'react'
import styled from 'styled-components'

import camera_on from './../Assets/images/ic_cameraon.svg'
import camera_off from './../Assets/images/ic_cameraoff.svg'
import camera_clear from './../Assets/images/ic_notenter.svg'
import reset from './../Assets/images/ic_resetcard.svg'

const SettingContainer = styled.div `
  width: 100%;
  background-color: #0a312f;
  div{
    display: flex;
    justify-content: center;
    align-content:center;
  }
`
const ItemSetting = styled.div `
  width: 260px;
  height: 125px;
  margin: ${props => props.mar || '0'};
  border-radius: 2px;
  border: solid 5px #fff;
  background-color: ${props => props.bgColor || '#5aa308'};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  div {
    width: 142.2px;
    font-family: Lucida;
    font-size: 25px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.16;
    letter-spacing: 0.6px;
    color: #fff;
    text-transform:uppercase;
  }
  img{
    width:60px;
    height: 60px;
  }
`
export default class Settings extends Component {
    render() {
        return (
            <SettingContainer>
                <div>
                    {/* <ItemSetting mar="75px 67px 75px 0"/>
          <ItemSetting mar="75px 67px 75px 0"/>
          <ItemSetting mar="75px 67px 75px 0"/>
          <ItemSetting mar="75px 67px 75px 0"/> */}
                    <ItemSetting mar="75px 37px">
                        <div>
                            camera on
                        </div>
                        <img alt="camera" src={camera_on}></img>
                    </ItemSetting>
                    <ItemSetting mar="75px 37px" bgColor="#d0021b">
                        <div>
                            camera off
                        </div>
                        <img alt="camera" src={camera_off}></img>
                    </ItemSetting>
                    <ItemSetting mar="75px 37px" bgColor="#2a5aed">
                        <div>
                            clear camera
                        </div>
                        <img alt="camera" src={camera_clear}></img>
                    </ItemSetting>
                    <ItemSetting mar="75px 37px" bgColor="#9b51e0">
                        <div>
                            reset card
                        </div>
                        <img alt="camera" src={reset}></img>
                    </ItemSetting>
                </div>
            </SettingContainer>
        )
    }
}
