import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/index.scss"
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {BrowserRouter} from "react-router-dom";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);


