const m = require('mithril')
const css = require('sheetify')
const store = require('./store')
const form = require('./views/form')

css('./main.css')

const appNode = document.body.appendChild(document.createElement('div'))

store.init()

m.route(appNode, '/', {
	'/': form
})
