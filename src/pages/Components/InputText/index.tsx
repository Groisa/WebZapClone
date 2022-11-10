

import React, { useState } from 'react';
import { InputTesxContainer, SegurityContainer } from './inputText.styed';
import { InputTypeInterface } from './inputTextInterface';
import { FaEye, FaEyeSlash } from "react-icons/fa";

// import { Container } from './styles';

const InputText: React.FC<InputTypeInterface> = ({
    label,
    placeholder,
    name,
    type,
    colorBackGround,
    ...rest
}) => {

    const [security, setSecurity] = useState<boolean>(true)
    const [typeSecurity, setTypeSecurity] = useState<string>('password')
    const handleSecurity = () => {
        setSecurity(!security)
        if (typeSecurity === 'password') {
            setTypeSecurity('text')
        } else {
            setTypeSecurity('password')
        }
    }
    return (
        <InputTesxContainer color={colorBackGround}>

            {type === 'password' ? (
                <>
                    <div>
                        <p>{label}</p>
                        <input
                            type={typeSecurity}
                            placeholder={placeholder}
                            id={name}
                        />
                    </div>
                    <SegurityContainer onClick={handleSecurity}>
                        {!security === true ? (
                            <FaEye size={25} color='#FFF' />
                        ) : (
                            <FaEyeSlash size={25} color='#FFF' />
                        )}
                    </SegurityContainer>
                </>
            ) : (
                <div>
                    <p>{label}</p>
                    <input
                        type={type}
                        placeholder={placeholder}
                        id={name}
                    />
                </div>
            )}
        </InputTesxContainer>
    );
}

export default InputText;