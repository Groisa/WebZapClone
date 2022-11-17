
import React, { InputHTMLAttributes } from 'react'

export interface InputTypeInterface extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    placeholder: string;
    name: string;
    colorBackGround: string 
}