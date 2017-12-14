import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { makeMainRoutes } from './routes';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Oxygen Web:300,400,700']
  }
});


const routes = makeMainRoutes();

ReactDOM.render(
  routes,
  document.getElementById('root')
);
