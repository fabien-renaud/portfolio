import {Section, SectionTitle} from '../../components';
import {Experience} from './Experience';
import './Resume.scss';

const experiences = [
    {
        company: 'HiPay',
        title: 'Software Engineer',
        startDate: 'Sep. 2021',
        endDate: 'Now',
        description:
            'Development within the Reco team, in charge of the reconciliation business. The objective is to reconcile the payments made by our customers/merchants via the HiPay payment platform with the banking data received from our partner acquirers.'
    },
    {
        company: 'Oui.SNCF',
        title: 'Full Stack Developer',
        startDate: 'Sep. 2019',
        endDate: 'Aug. 2021',
        description:
            'Development within the customer account team, in charge of the Customer domain. I evolved in a complex technical and functional environment.'
    },
    {
        company: 'Accenture',
        title: 'RPA Developer',
        startDate: 'Feb. 2018',
        endDate: 'Aug. 2019',
        description: 'RPA (Robotic Process Automation) developer on the Blue Prism solution.'
    }
];

export const Resume = () => {
    return (
        <Section id="resume">
            <SectionTitle>Resume</SectionTitle>
            <ul>
                {experiences.map((experience) => (
                    <Experience {...experience} />
                ))}
            </ul>
        </Section>
    );
};
