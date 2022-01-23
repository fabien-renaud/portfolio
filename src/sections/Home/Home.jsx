import {useColor} from '../../hooks/useColor';
import {Button, EmailIcon, FileIcon, GithubIcon, LinkedInIcon, PhoneIcon, Section} from '../../components';
import './Home.scss';
import {ColorPicker} from './ColorPicker';

export const Home = () => {
    const {styleColor} = useColor();
    const {backgroundColor, borderColor, iconColor, textColor} = styleColor(5);

    return (
        <Section id="home">
            <hgroup>
                <h1 className={textColor}>Fabien RENAUD</h1>
                <h2>Software Engineer</h2>
            </hgroup>
            <ColorPicker />
            <div className="call-to-action">
                <p>Don't be shy</p>
                <Button type="button" className={`${backgroundColor} ${borderColor}`}>
                    Contact me
                </Button>
                <div className={`icons ${iconColor}`}>
                    <PhoneIcon />
                    <EmailIcon />
                    <LinkedInIcon />
                    <GithubIcon />
                    <FileIcon />
                </div>
            </div>
        </Section>
    );
};
