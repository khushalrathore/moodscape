import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 bg-stone-800 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`} >
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} `}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-orange-100 text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-stone-500 text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section
    id="features"
    className={layout.section}
    style={{ backgroundColor: 'rgb(255, 251, 250)' }}
  >
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} text-black`}>
        Fits into your life<br className="sm:block hidden" /> & transforms it.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}>
        Our engaging personal feed with AI engine can be used anytime, anywhere—on your smartphone, tablet, or computer. Small slices of time can make big-time changes.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
