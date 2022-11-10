
import React, { useState } from 'react';
import { Button, Container, LeftContainer, LoginStructureStyled, RightContainer, SubContainer, TypeWriteComponent } from './loginEstructure.styled';

import InputText from '../InputText';
import WebZapLogo from '../../../assets/imgs/webZAPClone.png'
import Typewriter from "typewriter-effect";

const LoginEstructure: React.FC = () => {
    const [newAcount, setNewAcount] = useState<boolean>(false)

    return (
        <LoginStructureStyled>
            <Container>
                <LeftContainer>
                    <img src={WebZapLogo} alt='WebZapClone Logo' />
                    <TypeWriteComponent>
                        <Typewriter
                            onInit={(typewriter) => {

                                typewriter

                                    .typeString("WebZapClone")

                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("Unindo Mundos Distantes")
                                    .start()
                                    .pauseFor(500)
                                    .deleteAll()
                                    .typeString("WebZapClone")
                            }}
                        />
                    </TypeWriteComponent>
                    {newAcount === true && (
                        <h2>Cadastre-se</h2>
                    )}
                    <div>
                        {newAcount === true ? (
                            <>
                                <InputText colorBackGround='#1C1E1F' name='Usuário' placeholder='Insira um usuário' label='Usuário' type='text' />
                                <InputText colorBackGround='#1C1E1F' name='Senha' placeholder='Insira uma senha' label='Senha' type={'password'} />
                            </>
                        ) : (
                            <>
                                <InputText colorBackGround='#1C1E1F' name='Login' placeholder='Insira seu usuário' label='Login' type='text' />
                                <InputText colorBackGround='#1C1E1F' name='Senha' placeholder='Insira sua senha' label='Senha' type={'password'} />
                            </>
                        )}
                    </div>
                    <Button><p>Entrar</p></Button>
                    <SubContainer>
                        <p>Não possui cadastro?</p>
                        <p onClick={() => setNewAcount(!newAcount)}>Quero me cadastra!</p>
                    </SubContainer>
                </LeftContainer>
                <RightContainer />
            </Container>
        </LoginStructureStyled >
    )
}

export default LoginEstructure;