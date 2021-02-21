import './App.css';
import Main from './components/MainComponent';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {configureStore} from './redux/configureStore';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter >
        <div className="body">
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
