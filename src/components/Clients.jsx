import React from 'react';
import styles from '../style';
import { clients } from '../constants';

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} min-w-[120px] sm:min-w-[192px] m-5`}
          >
            <img
              src={client.logo}
              alt="client_logo"
              className="w-[100px] sm:w-[192px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
