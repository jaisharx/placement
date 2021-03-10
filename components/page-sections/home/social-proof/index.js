import Image from 'next/image';
import styles from './styles.module.scss';

export default function SocialProof() {
    return (
        <section className={styles.section}>
            <h3>Trusted by talent from top companies</h3>
            <Image
                src="/assets/brands.4a91150b307c57cdb25438b6c4dd5c0d.svg"
                width="1640"
                height="40"
                alt="Social Proof"
            />
        </section>
    );
}
