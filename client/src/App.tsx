import React from 'react';

import './App.css';

type AppProps = { name: string };

const App = ({ name }: AppProps) => (
  <div data-testid="message">{`Hello ${name}!`}</div>
);

export default App;
