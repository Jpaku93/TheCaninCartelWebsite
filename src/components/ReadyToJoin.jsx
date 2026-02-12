import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReadyToJoin = ({ title = "Ready to Join the Ranks?", subtitle = "Entry into the Canine Cartel is selective. Inquire today for personal coaching.", buttonText = "APPLY FOR MEMBERSHIP", dark = true }) => {
    const navigate = useNavigate();

    return (
        <section className={dark ? "dark-section" : "recommend-section"}>
            <div className={dark ? "form-container" : "recommend-card"}>
                <h2>{title}</h2>
                <p>{subtitle}</p>
                <button
                    className={dark ? "btn-secondary" : "btn-primary"}
                    onClick={() => navigate('/booking')}
                >
                    {buttonText}
                </button>
            </div>
        </section>
    );
};

export default ReadyToJoin;
