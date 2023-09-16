import PropTypes from 'prop-types'

import { Form } from './windows_style'

export function Window({ children, ...rest }) {
    return <Form {...rest}>{children}</Form>
}

Window.propTypes = {
    children: PropTypes.any
}