import styles from './Header.module.scss';
import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBell } from '@fortawesome/free-solid-svg-icons';

import Avatar from '~/components/Avatar';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={`row ${cx('row')} `}>
                    <div className="col-xl-4 col-lg-5  col-md-3"></div>
                    <div className="col-xl-5 col-lg-5  col-md-7">
                        <nav className={`navbar navbar-expand-sm ${cx('navbar-padding')}`}>
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a href="http://localhost:3000/" className={`${cx('nav-link')} nav-link`}>
                                        Trang chủ
                                    </a>
                                </li>
                                <li className="nav-item active">
                                    <a href="http://localhost:3000/" className={`${cx('nav-link')} nav-link`}>
                                        Tin tức
                                    </a>
                                </li>
                                <li className="nav-item active">
                                    <a href="http://localhost:3000/" className={`${cx('nav-link')} nav-link`}>
                                        Từ điển
                                    </a>
                                </li>
                                <li className="nav-item active">
                                    <a href="http://localhost:3000/" className={`${cx('nav-link')} nav-link`}>
                                        Thi thử
                                    </a>
                                </li>
                                <li className="nav-item active">
                                    <a href="http://localhost:3000/" className={`${cx('nav-link')} nav-link`}>
                                        Kho đề thi
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-xl-3 col-lg-2  col-md-2">
                        <a href="http://localhost:3000/" className={`text-dark ${cx('home_icon')}`}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </a>

                        <a href="http://localhost:3000/" className={`text-dark ${cx('home_icon')} position-relative`}>
                            <FontAwesomeIcon icon={faBell} />
                            <span
                                className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ${cx(
                                    'badge',
                                )}`}
                            >
                                99+
                            </span>
                        </a>

                        <a href="http://localhost:3000/" className={`text-dark ${cx('home_icon')}`}>
                            <Avatar className={`${cx('user-avatar')} `} src="" alt="user" />
                            <span className={`${cx('user-name')} `}>User</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
