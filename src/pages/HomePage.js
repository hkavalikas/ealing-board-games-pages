import React from 'react';
import Layout from '../components/layout/Layout';
import LeftSection from '../components/leftSection/LeftSection';
import RightSection from '../components/rightSection/RightSection';
import Footer from '../components/footer/Footer';

const HomePage = () => {
    return (
        <>
            <Layout>
                <LeftSection/>
                <RightSection/>
            </Layout>
            <Footer/>
        </>
    );
};

export default HomePage;
