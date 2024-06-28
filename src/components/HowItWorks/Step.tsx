import s from './HowItWorks.module.css';
import svg from '../../assets/sprite.svg';

interface StepProps {
  number: number;
  icon: string;
  title: string;
  text: string;
}

const Step: React.FC<StepProps> = ({ number, icon, title, text }) => (
  <div className={s.step_wrapper}>
    <div className={`${s.number_wrapper} ${s.number_line}`}>
      <div className={s.number}>
        <p>{number}</p>
      </div>
    </div>
    <div className={s.step}>
      <div className={s.padding_wrapper}>
        <div className={s.icon_step_wrapper}>
          <svg className={s.icon_step}>
            <use xlinkHref={`${svg}#icon-${icon}`} />
          </svg>
        </div>
      </div>
      <h3 className={s.step_title}>{title}</h3>
      <p className={s.step_text}>{text}</p>
    </div>
  </div>
);

export default Step;
