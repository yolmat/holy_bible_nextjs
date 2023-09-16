"use client"

import PropTypes from 'prop-types'

import { InputUser, FormDiv, TitleInputForm } from './input_style'

export function InputUsers({ children, ...rest }) {
    return (
        <FormDiv>
            <TitleInputForm>{children}</TitleInputForm>
            <InputUser {...rest}></InputUser>
        </FormDiv>
    )
}

InputUsers.propTypes = {
    children: PropTypes.string
}