import { createStore } from 'redux'
import todos from '../reducer'
import defaultTask from '../defaultTask'

const store = createStore(todos)

const unsubscribe = store.subscribe(() => console.log(store.getState()))

export default store;