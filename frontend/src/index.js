import Header from "./components/Header";
import Error404Screen from "./screens/Error404Screen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RegisterScreen from "./screens/RegisterScreen";
import SigninScreen from "./screens/SigninScreen";
import SnakegameScreen from "./screens/SnakegameScreen";
import Tictactoe from "./screens/TictactoeScreen";
import { parseRequestUrl } from "./utils";

const routes={
    '/' : HomeScreen,
    '/register': RegisterScreen,
    '/signin':SigninScreen,
    '/profile':ProfileScreen,
    '/snakegame':SnakegameScreen,
    '/tictactoe':Tictactoe,
};

const router = async () => {

    // parse the url into 3 different parts:
    const request = parseRequestUrl();
    // abstract the main url that is present at the end :
    const parseUrl = (request.resource ? `/${request.resource}` : '/')
      + (request.id ? '/:id' : '')
      + (request.verb ? `/${request.verb}` : '');
  
    // after abstracting use router object to get the screen to be displayed:
    const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;
  
    const header = document.getElementById('main-header');
    header.innerHTML = await Header.render();
    if(screen.after_render) await Header.after_render();
  
    const main = document.getElementById('main-container');
    // acording to screen we call the render function of corresponding screen:
    main.innerHTML = await screen.render();
    if(screen.after_render) await screen.after_render();
    
  };
  window.addEventListener('load', router);
  window.addEventListener('hashchange', router);
