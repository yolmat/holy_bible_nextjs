import PropTypes from 'prop-types'

import { Btn } from './button_style'

export function Button({ children, ...rest }) {
    return <Btn {...rest}>{children}</Btn>
}

Button.propTypes = {
    children: PropTypes.string
}