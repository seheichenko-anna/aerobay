import { Link } from 'react-router-dom';
import s from './ActionCallBlock.module.css';
import { MdArrowOutward } from 'react-icons/md';

function ActionCallBlock() {
    return (
        <div className={s.container}>
            <h1 className={s.container_title}><span>Already Know</span> What <span>You Want</span>?</h1>
            <Link to="/catalog">
                <button className={s.container_button}>Go to catalog <span><MdArrowOutward size={20} /></span></button>
            </Link>
        </div>
    )
}

export default ActionCallBlock
