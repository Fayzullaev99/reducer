import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
// import ReduxThunk from 'redux-thunk';
import { asyncIncr, changeTheme, decr, incr } from './redux/actions';
import { rootReducer } from './redux/rootReducer';
import './styles.css'

const counter = document.querySelector('#counter');
const addBtn = document.querySelector('#add');
const subBtn = document.querySelector('#sub');
const asyncBtn = document.querySelector('#async');
const themeBtn = document.querySelector('#theme');

const store = createStore(rootReducer,applyMiddleware(thunk))

window.store = store

addBtn.addEventListener('click',()=>{
    store.dispatch(incr())
})
subBtn.addEventListener('click',()=>{
    store.dispatch(decr())
})
asyncBtn.addEventListener('click',()=>{
    store.dispatch(asyncIncr())
})

store.subscribe(()=>{
    let state = store.getState()
    counter.textContent = state.counter
    document.body.classList = state.theme.value
 })
 store.dispatch({type:"init_app"})
themeBtn.addEventListener('click',()=>{
    const newTheme = document.body.classList.contains('light')
    ? "dark"
    : "light"
    store.dispatch(changeTheme(newTheme))
})