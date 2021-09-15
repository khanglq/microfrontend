import React from 'react';
//@ts-ignore
import AppTwo from 'app2/AppTwo';
//@ts-ignore
import AppOne from 'app1/AppOne';

export default () => (
  <div style={{ margin: '20px' }}>
    <React.Suspense fallback="Loading header...">
      <div
        style={{
          border: '1px dashed black',
          height: '50vh',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <h1>MF App Container Demo - Module federation Webpack</h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          <div
            style={{
              marginRight: '2rem',
              padding: '2rem',
              border: '1px dashed black',
            }}
          >
            <h2>MF-APP1</h2>
            <AppOne />
          </div>
          <div style={{ border: '1px dashed black', padding: '2rem' }}>
            <h2>MF-APP2</h2>
            <AppTwo />
          </div>
        </div>
      </div>
    </React.Suspense>
  </div>
);
