import { stats } from '../constants';
import styles from '../style';

const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap mb-6 sm:mb-20`}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`flex flex-1 justify-start items-center flex-row m-3 `}
        >
          <h4 className="font-semibold text-[30px] xs:text-[40px] leading-[43px] xs:leading-[26px] text-secondary">
            {stat.value}
          </h4>
          <p className="font-normal text-[15px] xs:text-[20px] leading-[21px] xs:leading-[26px] text-secondary uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
