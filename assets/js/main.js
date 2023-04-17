import naja from "naja";
import netteForms from "nette-forms";
import {
	AutosubmitPlugin,
	BootstrapSelect,
	CheckboxPlugin,
	ConfirmPlugin,
	createDatagrids,
	Happy,
	HappyPlugin,
	InlinePlugin,
	NetteFormsPlugin,
	SelectpickerPlugin,
	DatepickerPlugin,
	SortableJS,
	SortablePlugin, TomSelect,
	UrlPlugin,
	VanillaDatepicker, ItemDetailPlugin
} from "@datagrid";
import {NajaAjax} from "@datagrid/ajax";
import Select from "tom-select";
// Code highlighting
import Prism from "prismjs/components/prism-core";
import "prismjs/components/prism-markup-templating";
import "prismjs/components/prism-php";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
// Styles

import '../css/main.css';

document.addEventListener("DOMContentLoaded", () => {
	// AJAX
	naja.formsHandler.netteForms = netteForms;
	naja.initialize();

	createDatagrids(new NajaAjax(naja), {
		datagrid: {
			plugins: [
				new AutosubmitPlugin(),
				new CheckboxPlugin(),
				new ConfirmPlugin(),
				new InlinePlugin(),
				new ItemDetailPlugin(),
				new UrlPlugin(),
				new NetteFormsPlugin(netteForms),
				new HappyPlugin(new Happy()),
				new SortablePlugin(new SortableJS()),
				new DatepickerPlugin(new VanillaDatepicker({buttonClass: 'btn'})),
				new SelectpickerPlugin(new TomSelect(Select)),
			],
		},
	});

	// Highlighting
	const codes = document.querySelectorAll('code');
	codes.forEach(code => {
		Prism.highlightElement(code);
	});
});
