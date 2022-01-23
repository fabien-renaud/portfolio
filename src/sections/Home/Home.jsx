import {EmailIcon, FileIcon, GithubIcon, LinkedInIcon, PhoneIcon} from '../../components';

export const Home = () => {
    return (
        <section id="home">
            <hgroup>
                <h1>Fabien RENAUD</h1>
                <h2>Software Engineer</h2>
            </hgroup>
            <ul className="bullets-points">
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
            </ul>
            <p>Don't be shy</p>
            <button type="button">Contact me</button>
            <div className="icons">
                <PhoneIcon />
                <EmailIcon />
                <LinkedInIcon />
                <GithubIcon />
                <FileIcon />
            </div>
        </section>
    );
};
