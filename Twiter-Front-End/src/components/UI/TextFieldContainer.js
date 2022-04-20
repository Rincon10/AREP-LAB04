import PropTypes from 'prop-types';
import React from 'react';
import TextField from '@mui/material/TextField';

const TextFieldContainer = ({ textFieldItems = [], errors, handleChange }) => {
    return (
        <>
            {textFieldItems.length > 0 &&
                textFieldItems.map(textField => {
                    const { id, label, type } = textField;

                    const textFieldHTML = (
                        <>
                            <TextField
                                key={id}
                                margin="normal"
                                fullWidth
                                name={id}
                                label={label}
                                type={type}
                                id={id}
                                onChange={handleChange}
                            />
                            {errors[id] && (
                                <div id={id + 'div'} className="error">
                                    {errors[id]}
                                </div>
                            )}
                        </>
                    );
                    return textFieldHTML;
                })}
        </>
    );
};

TextFieldContainer.propTypes = {
    errors: PropTypes.object,
    handleChange: PropTypes.func,
    textFieldItems: PropTypes.array,
};

export default TextFieldContainer;
