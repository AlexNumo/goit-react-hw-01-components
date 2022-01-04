import styled from 'styled-components';

export const FriendList = styled.ul`
    display: flex;
    flex-direction: column;
    p{
        margin: 0px;
    }
`;

export const Item = styled.li`
    display: flex;
    width: 400px;
    height: 100px;
    list-style: none;
    border: 1px solid black;
    margin-top: 30px;
    box-shadow: 5px 5px 5px black;
    align-items: center;
    background-color: white;
`;

export const Avatar = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 2px;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 36px;
  text-align: center;
  padding-left: 25px;

`;

export const StatusOnline = styled.span`
        content: '';
        display: inline-block;
        width: 15px;
        height: 15px;
        -moz-border-radius: 7.5px;
        -webkit-border-radius: 7.5px;
        border-radius: 7.5px;
        background-color: #69d572;
        margin-right: 15px;
        margin-left: 15px;
`;

export const StatusOffline = styled.span`
        content: '';
        display: inline-block;
        width: 15px;
        height: 15px;
        -moz-border-radius: 7.5px;
        -webkit-border-radius: 7.5px;
        border-radius: 7.5px;
        background-color: #d56969;
        margin-right: 15px;
        margin-left: 15px;
`;