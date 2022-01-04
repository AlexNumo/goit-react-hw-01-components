import styled from 'styled-components';

export const Statistic = styled.section`
    width: 500px;
    box-shadow: 10px 5px 5px black;
    background-color: white;
    ul{
        padding: 0px;
    }
`;

export const Title = styled.h2`
    text-align: center;
    

`;

export const StatList = styled.ul`
    display: flex;
    
`;

export const Item = styled.li`
   list-style-type: none;
   width: 100px;
   display: flex;
   flex-direction: column;
    font-size: 25px;
    background-color: red;
    color: white;
    text-align: center;
    border-top:3px solid black;
    :nth-of-type(2){
      border-left:3px solid black; 
      border-right:3px solid black;   
    }
    :nth-of-type(4){
      border-left:3px solid black; 
      border-right:3px solid black;   
    }
`;