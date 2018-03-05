import React from 'react';
import Link from 'next/link';
// import Layout from '../sauce/layout';
import App from 'App/App';

const Index = () =>
  (
    <App>
      <Link href="/about" >
        <button>About</button>
      </Link>
      Hello guys
    </App>
  );

export default Index;
