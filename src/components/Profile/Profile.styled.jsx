import styled from 'styled-components';

export const UserCards = styled.div`
    width: 400px;
    border-radius: 10px;
    background-color: white;
        ul{
        padding: 0px;
    }
`;

export const Description = styled.div`

`;

export const Avatar = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    margin-top: 50px;
    margin-left: 150px;
    background-color: white;
`;

export const Name = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
    font-size: 25px;
    text-align: center;
`;

export const Tag = styled.p`
    text-align: center;
    color: #8e8e97d1;
    font-weight: 400;
    font-size: 20px;

`;

export const Location = styled.p`
    text-align: center;
    color: #8e8e97d1;
    font-weight: 400;
    font-size: 20px;
`;

export const Stats = styled.ul`
    display: flex;
    align-content: center;
    justify-content: space-around;
    background-color: #e9e3e3;
    border-radius: 10px;
`;

export const Info = styled.li`
    list-style: none;
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #8e8e97d1;
    font-weight: 700;
    font-size: 20px;
    flex-grow: 1;
    padding-bottom: 20px;
    padding-top: 30px;
    border-top:1px solid black;
    :nth-of-type(2){
      border-left:1px solid black; 
      border-right:1px solid black;   
    }
`;

export const Label = styled.span`

`;

export const Quantity = styled.span`
    color: black;
    font-weight: 700;
    padding-top: 5px;
`;

