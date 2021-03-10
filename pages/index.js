import NextHead from 'components/next-head';

import Layout from 'layouts/default';
import HeroSection from 'components/page-sections/home/hero-section';
import SocialProof from 'components/page-sections/home/social-proof';

export default function Home() {
    return (
        <>
            <NextHead title="Placement – Job Search Tracker &amp; CRM" />

            <Layout>
                <HeroSection />
                <SocialProof />
            </Layout>
        </>
    );
}
