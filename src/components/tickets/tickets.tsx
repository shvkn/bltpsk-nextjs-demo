import React from 'react';

import TicketCard from "@/components/ticket-card/ticket-card";

import styles from './tickets.module.css'

interface ITickets {
    items: IMove[];
}

const Tickets: React.FC<ITickets> = ({items}) => {
    return (
        <ul className={styles.movies}>
            {items.map((item) => {
                return <li key={item.id}>
                    <TicketCard movie={item}/>
                </li>;
            })}
        </ul>
    );
};

export default Tickets;
