import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;

    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgray;
        }
      
    }
    body{
        font-family: 'Montserrat', sans-serif;
        width: 100%;
        background: #060326;

    }
    h2{
        font-size: 3rem;
        color: #333;
        font-family: 'Rubik', sans-serif;

    }
    h3{
        font-size: 1.3rem;
        color: #333;
        padding: 1rem 0rem;
    }
    p{
        font-size: 1.2rem;
        line-height: 200%;
        color:  #d4d4d4;
    }
    a{
        text-decoration: none;
        color: #696969;
    }
    img{
        display: block;
    }
    input{
        font-family: "Montserrat", sans-serif;
        font-weight:bold;
    }
    select{
        font-family: "Montserrat", sans-serif;
        /* font-weight:bold; */

    }

`;

export default GlobalStyles;
