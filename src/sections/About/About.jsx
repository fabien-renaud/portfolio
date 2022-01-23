import {Section, SectionTitle} from '../../components';
import './About.scss';

export const About = () => {
    return (
        <Section id="about">
            <SectionTitle>About</SectionTitle>
            <p>I am a 24 years old French IT engineer. I imagine, design and develop solutions to make life easier.</p>
            <p>
                Currently in contract with a payment solution company, I have a complementary activity as a freelance
                developer.
            </p>
            <a href="#">Learn more about me</a>
        </Section>
    );
};
