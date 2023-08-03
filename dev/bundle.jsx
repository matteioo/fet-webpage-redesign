/* *****Alpine.js*****
	Import Alpine.js plugins before Alpine.start()!
*/
import Alpine from '@alpinejs/csp'
import Toolkit from '@alpine-collective/toolkit-screen'
import collapse from '@alpinejs/collapse'

import persist from '@alpinejs/persist'
Alpine.plugin(Toolkit)
Alpine.plugin(collapse)
Alpine.plugin(persist)

Alpine.data('counter', () => ({
	count: 1,

	increment() { this.count++ }
}))

Alpine.data('search', () => ({
	showSearch: false,
	closeSearch() {
		this.showSearch = false
	},
	openSearch() {
		this.showSearch = true
	},
	toggleSearch() {
		this.showSearch = ! this.showSearch
	},
	searchDocumentBody: {
		['@keyup.escape']() {
			this.showSearch = false
		},
		':class'() {
			if (this.showSearch) {
				return 'overflow-y-hidden';
			}
		}
	}
}))

Alpine.data('navBar', () => ({
	showNavBar: false,
	toggleNav() {
		this.showNavBar = ! this.showNavBar
	},
	navBarContent: {
		['x-show']() {
			return this.showNavBar || this.$screen('md')
		}
	}
}))

Alpine.data('pinnedPost', () => ({
	pin: false,
	showPin() {
		this.pin = true
	},
	hidePin() {
		this.pin = false
	}
}))

Alpine.data('discordInfoBox', () => ({
	showBox: true,
	hideInfoBox() {
		this.showBox = false
	}
}))

Alpine.data('footerCounter', () => ({
	counter: 0,
	increase() {
		this.counter++
	},
	footerFirst: {
		':class'() {
			if (this.counter >= 4) {
				return 'text-purple-300'
			}
		}
	},
	footerSecond: {
		':class'() {
			if (this.counter >= 5)
				return 'text-green-400'
		}
	},
	footerThird: {
		':class'() {
			if (this.counter >= 2)
				return 'text-proprietary hover:text-proprietary-dark'
			else
				return 'text-red-600 hover:text-red-700'
		}
	},
	footerFourth: {
		':class'() {
			if (this.counter >= 6)
				return 'text-pink-400'
		}
	},
	footerFifth: {
		':class'() {
			if (this.counter >= 3)
				return 'text-yellow-500'
		}
	}
}))

Alpine.start()

/* *****Prism.js***** */
//import Prism from 'prismjs'

/* ***** ScrollSpy ***** */
import ScrollSpy from '@three11/scrollspy'
const scrollSpy = new ScrollSpy({
	linkCurrentClass      : 'active', // The class that will be applied to the current element
	linksContainerSelector: '.scrollSpyNav', // The container of the scroll spy navigation
	sectionSelector       : '.members-article', // The selector for the sections that will be monitored
	headerOffset          : false, // Should calculate the header height
	headerClass           : '.sideBarNav' // The class of the header element
})