import React from 'react';
import ReactDOM from 'react-dom';
import './style.less';
import { hot } from 'react-hot-loader/root';

const App = () => (
    <div className="hola">My faairst react app with webpack</div>
);
const MyApp = hot(App);

ReactDOM.render(<MyApp />, document.getElementById('root'));
