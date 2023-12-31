import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import logo from '~/assets/Prox_logo.svg'
import styles from "./Sidebar.module.scss";

let cx = classNames.bind(styles);

function Sidebar() {
    return (<>
        <div className={cx('wrapper')}>
            <div className={cx('logo-container')}>
                <center>
                    <img src={logo} alt="logo" className={cx('logo')} />
                    <p className={cx('logo-name')}>HR Master</p>
                </center>
            </div>
            <div className={cx('sidebar-content')}>
                <Link to='/employee-manager' className={cx('sidebar-item')}>
                    Employee manager
                </Link>
                <Link to='/total-income' className={cx('sidebar-item')}>
                    Total income
                </Link>
                <Link to='/vacation-days' className={cx('sidebar-item')}>
                    Vacation days
                </Link>
                <Link to='/average-benefit-plan' className={cx('sidebar-item')}>
                    Average benefit plan
                </Link>
                <Link to='/hiring-anniversary' className={cx('sidebar-item')}>
                    Hiring anniversary 
                </Link>
                <Link to='/check-vacation-days' className={cx('sidebar-item')}>
                    Check vacation days
                </Link>
                <Link to='/employee-birthday' className={cx('sidebar-item')}>
                    Employee birthday
                </Link>

            </div>
        </div>
    </>);
}

export default Sidebar;