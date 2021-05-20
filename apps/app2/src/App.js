import React from 'react';

const App1Button = React.lazy(() => import('app1/Button'));

function App() {
  return (
    <div className="App">
      <header className="App-header">App 2</header>
      <div>
        <React.Suspense fallback="Loading Button">
          <App1Button />
        </React.Suspense>
      </div>
    </div>
  );
}

export default App;
