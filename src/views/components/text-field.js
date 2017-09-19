const m = require('mithril')
const css = require('sheetify')
const cn = require('classnames')

css('./text-field.css')

function textField(vnode) {
	const {
		disabled,
		validationText = '',
		hideValidationUntilBlur = false,
		hideValidationUntilInput = false,
		value = '',
		label = '',
		oninput = Function.prototype,
		onchange = Function.prototype,
		placeholder = '',
		inputProps = {},
		inputClass,
		labelClass
	} = vnode.attrs

	let validationMessage = validationText

	if (hideValidationUntilBlur && !vnode.state.blurred) {
		validationMessage = ''
	}

	if (hideValidationUntilInput && !vnode.state.used) {
		validationMessage = ''
	}

	return m('div', {
		className: 'lui-text-field dib relative mh2 pv2'
	}, [
		...(label ? [
			m('label', {
				onclick() {
					vnode.dom.querySelector('input').focus()
				},
				className: cn(
					'fw3 green',
					'lui-text-field__label',
					(vnode.state.hasFocus || value) ?
						'lui-text-field__label--float-up' :
						'underline',
					disabled && 'o-60',
					labelClass
				)
			}, label)
		] : []),
		m('input', {
			className: cn(
				'lui-text-field__input',
				'input-reset outline-0 br-0 bl-0 bt-0 bb b--green black-90 pv2 black-90 f4 mw5',
				disabled && 'bg-black-10 b--dashed o-60',
				inputClass
			),
			value,
			placeholder: vnode.state.hasFocus ? '' : placeholder,
			oninput(e) {
				vnode.state.used = true
				oninput(e)
			},
			onchange,
			disabled,
			onfocus() {
				vnode.state.hasFocus = true
			},
			onblur() {
				vnode.state.blurred = true
				vnode.state.hasFocus = false
			},
			...inputProps
		}),
		m('div.h1.f6.orange', validationMessage)
	])
}

module.exports = {view: textField}
