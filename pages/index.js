import NextHead from 'components/next-head';

import Layout from 'layouts/default';
import HeroSection from 'components/page-sections/home/hero-section';


export default function Home() {
    return (
        <>
            <NextHead title="Placement – Job Search Tracker &amp; CRM"/>

            <Layout>
                <HeroSection/>

            </Layout>
            
        </>
    );
}
