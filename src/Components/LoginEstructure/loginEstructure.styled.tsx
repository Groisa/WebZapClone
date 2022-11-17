// import { height } from '@mui/system'
import styled from 'styled-components'
import ContainerImage from '../../assets/imgs/conect.jpg'

export interface FormContainer  {
    height?: string
}
export const LoginStructureStyled = styled.div`
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100vw;
    display: flex;
    height: 100vh;
`
export const Container = styled.div`
    background-color: #1C1E1F;
    width: 80%;
    display: flex;
    flex-direction: row;
    height: 90%;
    box-shadow: 0 8px 32px 0 rgba( 255, 255, 255, 0.37 );
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`
export const LeftContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 85px;
        height: 85px;
        margin-top: 10%;
    }
    h1 {
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 35px;
        font-weight: 600;
    }
    h2 {
        font-weight: 100;
        font-size: 25px;
        margin-top: 10px;
    }
    div {
        margin-top: 2%;
    }

`
export const RightContainer = styled.div`
    width: 50%;
    height: 100%;
    background-image: url(${ContainerImage});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
    transition: 2s;
    :hover {
        background-color: rgba( 255, 255, 255, 0.50 );
        backdrop-filter: blur( 13.5px );
        scale: 1.01;
        
        -webkit-backdrop-filter: blur( 13.5px );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
    }
`
export const FormStyled = styled.form<FormContainer>`
    overflow-y: scroll;
    overflow-x: hidden;
    width: 100%;
    height: ${({height}) => height ? height : '60%'};
    ::-webkit-scrollbar {
        width: 3px;
    }
    ::-webkit-scrollbar-track {
        background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background: #dad7d7;
    }
`
export const Button = styled.button`
    background-color: transparent;
    border-color: #fff;
    color: #fff;
    padding: 10px;
    width: 150px;
    border-radius: 15px;
    transition: all 1s ease-out;
    font-size: 18px;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: row;
    cursor: pointer;
    box-shadow: 3px 3px 6px 2px rgba( 255, 255, 255, 0.1 );
    :hover {
        scale: 1.1;
        color: #000;
        font-weight: 600;
        text-shadow: 3px 2px 3px  rgba( 255, 255, 255, 0.9 );
        background: rgb(2,0,36);
        background: linear-gradient(90deg, rgba(2,0,36,0.4) 0%, rgba(0,212,255,0.7063200280112045) 82%);
    }
`
export const SubContainer = styled.div`
    margin-bottom: 20;
    text-align: center;
    p:first-child {
        font-size: 18px;
        font-weight: 300;
        font-family: 'Courier New', Courier, monospace;
    }
    p:last-child{
        font-family: 'Courier New', Courier, monospace;
        font-size: 19px;
        color: #00ff;
        font-weight: 800;
        transition: 1s;
        :hover {
            margin-top: 10px;
            background-color: #fff;
            color: #000;
            cursor: pointer;
            scale: 1.0002;
            border-radius: 20px;
        }
    }
`
export const TypeWriteComponent = styled.div`
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 35px;
        font-weight: 600;
        text-align: center;
        width: 75%;
        font-family: Arial, Helvetica, sans-serif;
`