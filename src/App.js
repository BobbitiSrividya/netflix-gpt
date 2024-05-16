import logo from './logo.svg';
import './App.css';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Browse from './components/Browse';
import appStore from './utils/appStore';
import { Provider } from 'react-redux';

function App() {
  return (
    <div>
       <Provider store = {appStore}>
        <Body />
       </Provider>
    </div>
  );
}

export default App;
