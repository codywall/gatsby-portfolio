import React from 'react';
import Hero from '../components/hero';
import Tools from '../components/tools';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Tools />
    {/* <Link to='/page-2/'>Go to page 2</Link> */}
  </Layout>
);

export default IndexPage;
