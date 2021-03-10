import Link from 'next/link';
import cx from 'classnames';
import styles from './styles.module.scss';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src="/assets/image.png" alt="Placement" />
                </div>

                <ul className={styles.list}>
                    <li>
                        <Link href="/">
                            <a>Coaching</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/">
                            <a>Pricing</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/">
                            <a>Workshops</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/">
                            <a>FAQ</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/">
                            <a>About</a>
                        </Link>
                    </li>
                </ul>

                <div className={styles.ctaBtns}>
                    <Link href="/">
                        <a className={styles.btn}>Login</a>
                    </Link>

                    <Link href="/">
                        <a className={cx(styles.btn, styles.cta)}>Get Started</a>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
