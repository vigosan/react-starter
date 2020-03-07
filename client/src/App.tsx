import React from 'react';

import './App.css';

type AppProps = { name: string };

const App = ({ name }: AppProps) => <h1>{`Hello ${name}!`}</h1>;

export default App;
