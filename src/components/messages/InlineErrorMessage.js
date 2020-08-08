import React from 'react'
import PropTypes from 'prop-types'

const InlineErrorMsg = ({ error }) => (
    <span style={{ color: '#ae5856' }}>{error}</span>
)

InlineErrorMsg.propTypes = {
    error: PropTypes.string.isRequired
}

export default InlineErrorMsg



