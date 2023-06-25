import styles from './Wrapper.module.scss';
import classNames from "classnames/bind";
import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

const cx = classNames.bind(styles);

function Wrapper({ children, onBack = false, className='', ...props}) {
    const navigate = useNavigate();

    return (<>
        <div className={`${cx('wrapper')} ${className}`} {...props}>
            {
                onBack && <button className={cx('back-btn')} onClick={() => navigate(-1)}>
                    <BiArrowBack />
                    Quay lại
                </button>
            }
            {children}
        </div>
    </>);
}

export default Wrapper;