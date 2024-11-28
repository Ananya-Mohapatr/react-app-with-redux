import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import PreviewPage from './PreviewPage';
function App() {
  return (
    <div className='App'>
   <Provider store={store}>
    <PreviewPage/>
   </Provider>
   </div>
  );
}

export default App;
