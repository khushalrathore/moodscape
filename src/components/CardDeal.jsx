import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section} style={{ backgroundColor: 'rgb(255, 251, 250)' }}> 
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Break old patterns, <br className="sm:block hidden" />form new habits.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Our work has resulted in positive change. 
      We have educated millions about mental health conditions and reduced barriers to treatment and services.
      <span className="text-black"> MoodGraph</span> on your profile section allows you to view your Mood History.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
