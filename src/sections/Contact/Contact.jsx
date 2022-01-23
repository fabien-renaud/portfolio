import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Section, SectionTitle} from '../../components';
import './Contact.scss';

export const Contact = () => {
    const {register, handleSubmit} = useForm();
    const [isSent, setSent] = useState(false);

    const onSubmit = (data) => {
        setSent(true);
        console.log(data);
    };

    return (
        <Section id="contact">
            <SectionTitle>Contact</SectionTitle>
            <p>
                Still here? I’m glad that you made it this far! Don’t hesitate to contact me if you have questions,
                feedbacks, or if you wanna work with me!
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>
                        Name
                        <span>이름</span>
                        <input {...register('name')} />
                    </label>
                    <label>
                        Email
                        <span>이메일</span>
                        <input {...register('email')} />
                    </label>
                </div>
                <label>
                    Message
                    <span>메시지</span>
                    <textarea {...register('message')} />
                </label>
                <button type="submit">{isSent ? 'Thank you!' : 'Send'}</button>
            </form>
        </Section>
    );
};
