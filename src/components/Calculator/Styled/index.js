import styled from "styled-components";

export const Container = styled.div`
  display: grid; ${''/* when creating grid, must define the column and rows gotta look */}
  justify-content: center;
  align-content:center;
  width: 400px;
  margin: 120px auto; ${''/* auto is for the left and right */}
  grid-template-columns: repeat(4, 100px); ${''/* 4 column */}
  grid-template-rows: minmax(120px, auto) repeat(5,100px); ${''/* 5 rows */}
  box-shadow: 2px 2px 10px grey;
  border-radius: 10px;

`;

export const Screen = styled.div`
grid-column: 1 / -1; ${''/* first column all the way to the last column */}
background-color: #C38D9E ;
display:flex;
justify-content:space-around;
flex-direction: column; 
padding: 10px;
word-wrap: break-word;
word-break:break-all;
text-align:right;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
`
export const Previous =  styled.div`
color:white;
font-size: 1.5rem;
`
export const Current =  styled.div`
color:white;
font-size: 2.5rem;
`
export const Button = styled.button`
cursor:pointer;
font-size:2rem;
border: 1px outset white;
outline:none;
background-color:rgba(255,255,255,0.75);
&:hover{
  background-color:rgba(255,255,255,0.9);
  color: black;
}

/* Expanded form example */
/*${function({gridSpan}){
  if(gridSpan){
    return `grid-column:span ${gridSpan}`
  }
}}; */

/* Simplified form example */
${ ({gridSpan}) => gridSpan && `grid-column: span ${gridSpan}` };
${ ({operation}) => operation && `background-color:#E8A87C; color:#E27D60;` };
${ ({control}) => control && `background-color:#41B3A3; color:white;` };
${ ({equals}) => equals && `background-color:#E8A87C; color:#E27D60; border-radius: 0 0 10px 0;` };
${ ({decimal}) => decimal && `background-color:#41B3A3; color:white; border-radius: 0 0 0 10px;`};

`