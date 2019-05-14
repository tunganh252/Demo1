import React, { Component } from "react";
import styled from "styled-components";

const ItemUserContainer = styled.div`
  div {
    width: 150px;
    height: 200px;
    border-radius: 2px;
    border: solid 5px #5bc3bf;
    margin-left: 33px;
      img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
    }
`;
export default class ItemUser extends Component {
  onDragItem = (e) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
    // e.preventDefault();
    e.dataTransfer.setData("text", this.props.UserData.id);
    // e.dataTransfer.setData("text/plain", e.target.id);
    console.log('drag --> id: '+this.props.UserData.id);
  }
  

  render() {
    return (
      <ItemUserContainer>
        <div>
          <img alt="user" src={this.props.UserData.img}
          draggable="true" 
          onDragStart={(e)=>this.onDragItem(e)}
          />
        </div>
      </ItemUserContainer>
    );
  }
}
