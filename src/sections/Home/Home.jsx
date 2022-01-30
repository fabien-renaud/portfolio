import {useColor} from '../../hooks/useColor';
import {Avatar, Button, EmailIcon, FileIcon, GithubIcon, LinkedInIcon, PhoneIcon, Section} from '../../components';
import './Home.scss';
import {ColorPicker} from './ColorPicker';

export const Home = () => {
    const {styleColor} = useColor();
    const {backgroundColor, borderColor, iconColor, textColor} = styleColor(5);

    return (
        <Section id="home">
            <div className="heading">
                <Avatar />
                <div className="heading-info">
                    <hgroup>
                        <h1 className={textColor}>Fabien RENAUD</h1>
                        <h2>Software Engineer</h2>
                    </hgroup>
                    <ColorPicker />
                </div>
            </div>
            <div className="call-to-action">
                <p>Don't be shy</p>
                <Button type="button" className={`${backgroundColor} ${borderColor}`}>
                    Contact me
                </Button>
                <div className="icons">
                    <a href="tel:+33687240753" className={iconColor}>
                        <PhoneIcon />
                    </a>
                    <a href="mailto:contact@fabienrenaud.fr" className={iconColor}>
                        <EmailIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/fabien-renaud" className={iconColor}>
                        <LinkedInIcon />
                    </a>
                    <a href="https://github.com/fabien-renaud" className={iconColor}>
                        <GithubIcon />
                    </a>
                    <a href="../../../public/files/CV%20Fabien%20RENAUD.pdf" download className={iconColor}>
                        <FileIcon />
                    </a>
                </div>
            </div>
        </Section>
    );
};
