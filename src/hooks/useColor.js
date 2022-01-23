import {useContext} from 'react';
import {ColorContext} from '../App';

export const useColor = () => {
    const {pickedColor, setPickedColor} = useContext(ColorContext);

    const colors = [
        {key: 1, hex: '#2f4858'},
        {key: 2, hex: '#4c577e'},
        {key: 3, hex: '#875d92'},
        {key: 4, hex: '#c55d89'},
        {key: 5, hex: '#ed6d67'},
        {key: 6, hex: '#f39336'}
    ];

    const classColorInline = (className, color) => `${className}-${pickedColor ?? color}`;
    const styleColor = (color = null) => ({
        textColor: classColorInline('color', color),
        backgroundColor: classColorInline('background-color', color),
        borderColor: classColorInline('border-color', color),
        iconColor: classColorInline('icon-color', color)
    });

    return {
        colors,
        pickedColor,
        setPickedColor,
        styleColor,
        hexColor: (color = pickedColor) => colors.find(({key}) => key === color).hex
    };
};
