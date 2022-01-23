export const Experience = ({icon, company, title, startDate, endDate, description}) => {
    return (
        <li>
            <span>{company}</span>
            <h3>{title}</h3>
            <p>
                {startDate} - {endDate}
            </p>
            <p>{description}</p>
            <a href="#">More about</a>
        </li>
    );
};
