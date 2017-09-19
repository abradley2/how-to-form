const m = require('mithril')
const update = require('immutability-helper')
const store = require('../../store')
const textField = require('../components/text-field')
const button = require('../components/button')

const initialState = {
	submitted: false,
	thing: '',
	name: '',
	age: null
}

const validators = {
	thing: val => val ? null : 'thing is required',

	name: val => val ? null : 'name is required',

	age: val => Number.isNaN(parseInt(val, 10)) ? 'age must be a number' : null
}

store.addReducer('form', (state = initialState, action) => {
	switch (action.type) {
		case 'FORM^INITIALIZE_FORM':
			return initialState
		case 'FORM^SET_FIELD':
			return update(state, {
				[action.field]: {$set: action.value}
			})
		case 'FORM^SUBMIT_FORM':
			return update(state, {
				submitted: {$set: true}
			})
		default:
			return state
	}
})

function oninit() {
	store.dispatch({
		type: 'FORM^INITIALIZE_FORM'
	})
}

function form() {
	const {form} = store.getState()

	return m('div.avenir', [
		m('div.flex.flex-row-l.flex-column', [
			m(textField, {
				label: 'age',
				value: form.age,
				validationText: validators.age(form.age),
				hideValidationUntilInput: !form.submitted && true,
				oninput(e) {
					store.dispatch({
						type: 'FORM^SET_FIELD',
						field: 'age',
						value: e.target.value
					})
				}
			}),
			m(textField, {
				label: 'name',
				value: form.name,
				validationText: validators.name(form.name),
				hideValidationUntilBlur: !form.submitted && true,
				oninput(e) {
					store.dispatch({
						type: 'FORM^SET_FIELD',
						field: 'name',
						value: e.target.value
					})
				}
			}),
			m(textField, {
				label: 'thing',
				value: form.thing,
				validationText: form.submitted && validators.thing(form.thing),
				oninput(e) {
					store.dispatch({
						type: 'FORM^SET_FIELD',
						field: 'thing',
						value: e.target.value
					})
				}
			})
		]),
		m(button, {
			buttonType: 'primary',
			onclick() {
				store.dispatch({
					type: 'FORM^SUBMIT_FORM'
				})
			}
		}, 'Submit')
	])
}

module.exports = {oninit, view: form}
