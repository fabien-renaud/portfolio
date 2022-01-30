import {useScroll} from '../../hooks/useScroll';
import './NavBar.scss';

const sections = [
    {
        title: 'Home',
        position: 0
    },
    {
        title: 'About',
        position: 1
    },
    {
        title: 'Resume',
        position: 2
    },
    {
        title: 'Contact',
        position: 3
    }
];

export const NavBar = () => {
    const {scrollY} = useScroll();
    const scrollMin = (position) => position * 100 - 10;
    const scrollMax = (position) => position * 100 + 90;
    const isActive = (position) => scrollY >= scrollMin(position) && scrollY < scrollMax(position);

    return (
        <nav>
            <ul>
                {sections.map((section) => (
                    <li
                        key={section.title}
                        className={`${isActive(section.position) ? 'active ' : ''}${section.title.toLowerCase()}`}>
                        <a href={`#${section.title.toLowerCase()}`}>
                            <span>{section.title}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
