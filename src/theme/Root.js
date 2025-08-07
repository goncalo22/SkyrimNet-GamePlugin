import React, { useEffect } from 'react';
import docsearch from '@docsearch/js';
import '@docsearch/css';

export default function Root({ children }) {
  useEffect(() => {
    docsearch({
      container: '#docsearch',
      appId: 'UEG0ACFF5L',
      indexName: 'SkyrimNet Docs Crawler Search',
      apiKey: '3d296e08aac4110d508257d3e33ebc4',
    });
  }, []);

  return <>{children}</>;
}