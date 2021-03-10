import Navbar from 'components/footer';
import Footer from 'components/navbar';

export default function DefaultLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
