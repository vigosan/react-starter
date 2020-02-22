import React from 'react';

import './App.css';

type AppProps = { app: string };
const App = ({ app }: AppProps) => <div>{`Hello ${app}!`}</div>;

export default App;
