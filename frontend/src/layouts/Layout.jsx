import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

function Layout({ children }) {
    return (
        <>
            <Navbar />
            <div className="d-flex">
                <Sidebar />
                <main className="container-fluid my-4 flex-grow-1">
                    {children}
                </main>
            </div>
            <Footer />
        </>
    );
}

export default Layout;
