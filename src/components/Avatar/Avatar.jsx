import avatar from './avatar.jpg';
import './Avatar.scss';

export const Avatar = () => {
    return <img src={avatar} alt="avatar" className="avatar" />;
};
