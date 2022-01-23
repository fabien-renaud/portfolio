import './NavBar.scss';

const sections = [
    {
        title: 'Home',
        subTitle: '홈 페이지 // Accueil'
    },
    {
        title: 'About',
        subTitle: '대해서 // A propos'
    },
    {
        title: 'Resume',
        subTitle: '경력 // Expériences'
    },
    {
        title: 'Contact',
        subTitle: '연락 // Contact'
    }
];

export const NavBar = () => {
    return (
        <nav>
            <ul>
                {sections.map((section) => (
                    <li key={section.title} className="selected">
                        <a href={`#${section.title.toLowerCase()}`}>
                            <span>{section.subTitle}</span>
                            {section.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
