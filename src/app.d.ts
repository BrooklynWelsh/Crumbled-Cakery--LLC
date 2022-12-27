// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
/// <reference types="@sveltejs/kit" />
declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}
	interface Platform {
		env?: {
			KV_NAMESPACE_HERE: KVNamespace;
		};
	}
}

declare namespace OrderForm {
	interface RadioOption {
		name: string,
		price: number
	}

	interface RadioInput {
		title: string,
		element: RadioNodeList,
		options: Array<RadioOption>
	}

	interface CountField extends RadioInput {
		minimum: string
	}

	interface FreeTextInput {
		title: string,
		description: string,
		element: HTMLTextAreaElement,
	}

	interface ColorField extends FreeTextInput {
		maxColors: number
	}

	interface IDefaultOrderForm {
		startingPrice: number = -1,
		count: CountField = {},
		style: RadioInput,
		colors: FreeTextInput,
		addOns: FreeTextInput,
		comments: FreeTextInput
	}

	interface ICakeOrderForm extends IDefaultOrderForm {
		layers: RadioInput,
		flavors: RadioInput,
		event: RadioInput,
		toppers: RadioInput
	}

	interface ISugarCookieOrderForm extends IDefaultOrderForm {
		event: RadioInput
	}

	class DefaultOrderForm implements IDefaultOrderForm {
		public count = { title: "Count | ", minimum: "", options: "" }
		public style = { title: "Style or Theme", options: "", element: document.createElement("radio") }
		public colors = {
			title: "Colors",
			maxColors: 0,
			description: `Decor can be a collection of ${this.maxColors} colors of your 
								choosing and white. List your choices here! You may submit a link to a 
								color palette if you would like`,
			element: document.createElement('textarea')
		}
		public addOns = { title: "Add-ons", text: "" }
		public comments = { title: "Final Comments, Questions, or Ideas?", description: null, element: document.createElement('textarea') }
	}
}
