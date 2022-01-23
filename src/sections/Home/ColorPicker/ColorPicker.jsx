import {useState} from 'react';
import './ColorPicker.scss';
import {useColor} from '../../../hooks/useColor';

const BulletPoint = ({value, onClick}) => {
    return <li value={value} onClick={onClick} />;
};

export const ColorPicker = () => {
    const {pickedColor, colors, setPickedColor, styleColor, hexColor} = useColor();
    const {textColor} = styleColor();

    const onClick = (event) => {
        const targetColor = event.target.value;
        setPickedColor(pickedColor === targetColor ? null : targetColor);
    };

    return (
        <div className="color-picker">
            <ul className="colors">
                {colors.map(({key}) => (
                    <BulletPoint key={key} value={key} onClick={onClick} />
                ))}
            </ul>
            {pickedColor && <p className={`picked-color ${textColor}`}>{hexColor()}</p>}
        </div>
    );
};
