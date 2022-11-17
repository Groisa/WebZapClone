
import React, { useEffect, useState } from 'react';
import { Button, Container, FormStyled, LeftContainer, LoginStructureStyled, RightContainer, SubContainer, TypeWriteComponent } from './loginEstructure.styled';

import InputText from '../InputText';
import WebZapLogo from '../../assets/imgs/webZAPClone.png'
import Typewriter from "typewriter-effect";
import { LoginUserFunction, UserProps } from '../../functions/userFunctions';
import { toast } from "react-toastify"
import ReactLoading from 'react-loading';


const LoginEstructure: React.FC = () => {
    const [newAcount, setNewAcount] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [userCreate, setUserCreate] = useState<UserProps>({
        firstname: '',
        lastname: '',
        login: '',
        password: '',
    })
    const handleFunction = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newAcount === true) {
            setLoading(true)
            const response = await LoginUserFunction({
                user: userCreate
            })
            if (response?.success === true) {
                toast.success(response.message)
                setNewAcount(false)
                
            } else {
                toast.error(response?.message)
            }
            setLoading(false)
            
        }
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (newAcount === true) {
            setUserCreate({
                ...userCreate,
                [e.target.name]: e.target.value
            })
        }
    }
    const userActions = () => {
        setNewAcount(!newAcount)
        setUserCreate({
            firstname: '',
            lastname: '',
            login: '',
            password: '',
        })
    }
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
                            <FormStyled onSubmit={(e) => handleFunction(e)}>
                                <InputText
                                    colorBackGround='#1C1E1F'
                                    name='firstname'
                                    placeholder='Insira seu primeiro nome'
                                    label='Primeiro Nome'
                                    type='text'
                                    required
                                    onChange={handleChange}
                                    value={userCreate.firstname}
                                />
                                <InputText
                                    colorBackGround='#1C1E1F'
                                    name='lastname'
                                    required
                                    placeholder='Insira seu segundo nome'
                                    label='Segundo Nome'
                                    value={userCreate.lastname}
                                    onChange={handleChange}
                                />
                                <InputText
                                    colorBackGround='#1C1E1F'
                                    name='login'
                                    placeholder='Insira um usuário'
                                    label='Usuário'
                                    required
                                    type='text'
                                    onChange={handleChange}
                                    value={userCreate.login}
                                />
                                <InputText
                                    colorBackGround='#1C1E1F'
                                    name='password'
                                    placeholder='Insira uma senha'
                                    label='Senha'
                                    required
                                    type={'password'}
                                    onChange={handleChange}
                                    value={userCreate.password}
                                />
                                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 15 }}>
                                    {loading === true ? (
                                        <ReactLoading type='balls' color='#fff' height={50} width={50} />
                                    ) : (
                                        <Button><p>Entrar</p></Button>
                                    )}
                                </div>
                                <SubContainer>
                                    <p>Já possuo cadastro?</p>
                                    <p onClick={userActions}>Quero voltar ao login</p>
                                </SubContainer>
                            </FormStyled>
                        ) : (
                            <>
                                <InputText colorBackGround='#1C1E1F' name='Login' placeholder='Insira seu usuário' label='Login' type='text' />
                                <InputText colorBackGround='#1C1E1F' name='Senha' placeholder='Insira sua senha' label='Senha' type={'password'} />
                                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 15 }}>
                                    <Button><p>Entrar</p></Button>
                                </div>
                                <SubContainer>
                                    <p>Não possui cadastro?</p>
                                    <p onClick={userActions}>Quero me cadastra!</p>
                                </SubContainer>
                            </>
                        )}
                    </div>


                </LeftContainer>
                <RightContainer />
            </Container>
        </LoginStructureStyled >
    )
}

export default LoginEstructure;