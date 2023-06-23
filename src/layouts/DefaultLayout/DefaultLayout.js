import styles from "./DefaultLayout.module.scss";
import PropTypes from "prop-types";
import Sidebar from "~/components/core/Sidebar";

import classNames from "classnames/bind";

const cx = classNames.bind(styles);

// eslint-disable-next-line react/prop-types
function DefaultLayout({ children }) {
  return (
    <div className={styles.wrapper}>
      {/* <Navbar /> */}
      <div className={cx('container')}>
        <div className={cx('sidebar')}><Sidebar /></div>
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
}

DefaultLayout.prototype = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
