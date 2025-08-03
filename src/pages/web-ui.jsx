import React from 'react';
import Layout from '@theme/Layout';

export default function WebUI() {
  return (
    <Layout title="Web UI" description="SkyrimNet Web UI Overview">
      <div style={{ padding: '2rem' }}>
        <h1>Web UI</h1>
        <p> This could be the SkyrimNet Web UI page.
         Its jsx-based, so react capable, can be hooked to the web.ui components or perhaps serve as a way of consulting/referencing the web ui without skyrim running </p>
      </div>
    </Layout>
  );
}