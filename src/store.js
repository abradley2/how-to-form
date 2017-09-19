const {createStore, combineReducers} = require('redux')

const reducers = {}

let store

module.exports = {
	addReducer(name, reducer) {
		reducers[name] = reducer
	},
	getState() {
		return store.getState()
	},
	dispatch(action) {
		return store.dispatch(action)
	},
	init() {
		store = createStore(combineReducers(reducers))
		return store
	}
}
