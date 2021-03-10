import styles from './styles.module.scss';

export default function HeroSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h1>
                    Fly through <br /> your job search
                </h1>
                <h2>
                    Get twice the interviews with half the effort. <br /> You’ll wonder how you
                    managed on your own.
                </h2>

                <form>
                    <div className={styles.formGroup}>
                        <input type="text" placeholder="you@email.com" />
                        <button>Get Started</button>
                    </div>
                </form>

                <div className={styles.text}>Free to Use • No Credit Card Required</div>
            </div>
        </section>
    );
}
