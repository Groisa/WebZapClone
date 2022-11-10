import styled from 'styled-components'

interface Input {
    color: string
}
    export const InputTesxContainer = styled.div<Input>`
    width: 100%;
    height: auto;
    margin-top: 5%;
    transition: all 0.5s ease ;
    margin-bottom: 5%;
    display: flex;
    align-items: flex-end;
    p{
        position: relative;
        margin-left: 3%;
        font-size: 18px;
    }
    input {
        background-color: transparent;
        padding: 10px;
        font-size: 18px;
        border-radius: 8px;
        width: 19rem;
        cursor: pointer;
        border: 1px solid rgba( 255, 255, 255, 0.8);
        border-top: transparent;
        border-left: transparent;
        border-right: transparent;
        box-shadow: 0 1px 2px 0 rgba( 255, 255, 255, 0.37 );
        margin-top: 2%;
        color: #fff;
        :focus {
            margin-top: 4%;
            border-top: transparent;
            border-left: transparent;
            border-right: transparent;
        }
        :-webkit-autofill,:-webkit-autofill:hover, :-webkit-autofill:focus,:-webkit-autofill:active{
        box-shadow: 0 0 0 30px #1C1E1F inset !important;
        -webkit-text-fill-color: white !important;
        }   
    }
    :hover {
            scale: 1.01;
        }
`
export const SegurityContainer = styled.div`
    position: relative;
    right: 35px;
    bottom: 4px;
    cursor: pointer;
`