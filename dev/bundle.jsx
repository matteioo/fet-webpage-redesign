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

Alpine.store('darkMode', {
	theme: Alpine.$persist('system'),
	setSystem() {
		this.theme = 'system'
	},
	setLight() {
		this.theme = 'light'
	},
	setDark() {
		this.theme = 'dark'
	},
	isLight() {
		return this.theme === 'light' || (this.theme === 'system' && !window.matchMedia('(prefers-color-scheme: dark)').matches)
	},
	isDark() {
		return this.theme === 'dark' || (this.theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
	},
	getCurrentTheme() {
		return this.theme
	}
})

Alpine.data('bodyData', () => ({
	showSearch: false,
	showModal: false,
	openSearch() {
		this.showSearch = true
	},
	closeSearch() {
		this.showSearch = false
	},
	openModal() {
		this.showModal = true
	},
	toggleModal() {
		this.showModal = !this.showModal
	},
	closeModal() {
		this.showModal = false
	},
	displayModal() {
		return this.showModal || this.$screen('sm')
	},
	displayNoModal() {
		return !this.displayModal()
	},
	setThemeSystem() {
		Alpine.store('darkMode').setSystem()
		console.log(this.$store.darkMode.theme)
	},
	setThemeLight() {
		Alpine.store('darkMode').setLight()
		console.log(this.$store.darkMode.theme)
	},
	setThemeDark() {
		Alpine.store('darkMode').setDark()
		console.log(this.$store.darkMode.theme)
	},
	isThemeDark() {
		return Alpine.store('darkMode').isDark()
	},
	isThemeLight() {
		return Alpine.store('darkMode').isLight()
	},
	documentRoot: {
		':class'() {
			if (this.$store.darkMode.isDark()) {
				return 'dark'
			}
		}
	},
	documentBody: {
		['@keyup.escape']() {
			this.showSearch = false
			this.showModal = false
		},
		':class'() {
			let classes = ''

			if (this.showSearch || this.showModal) {
				classes.concat(' overflow-y-hidden')

				if (this.showModal) {
					classes.concat(' sm:overflow-y-auto')
				}
			}

			return classes
		}
	},
	modalContent: {
		['x-show']() {
			return this.showModal || this.$screen('sm')
		}
	}
}))

Alpine.data('navBar', () => ({
	showNavBar: true,
	showPopupNav: false,
	showThemePopup: false,
	toggleNav() {
		this.showNavBar = ! this.showNavBar
	},
	toggleThemePopup() {
		this.showThemePopup = !this.showThemePopup
	},
	closeThemePopup() {
		this.showThemePopup = false
	},
	themePopupVisible() {
		return this.showThemePopup
	},
	togglePopupNav() {
		this.showPopupNav = !this.showPopupNav
	},
	closePopupNav() {
		this.showPopupNav = false
	},
	showPopupNavLogout() {
		return !this.$screen('lg')
	},
	navBarContent: {
		['x-show']() {
			return this.showNavBar || this.$screen('md')
		}
	},
	navBarThemeContent: {
		['x-show']() {
			return this.showThemePopup || this.$screen('md')
		}
	},
	navBarThemeContentSystem: {
		':class'() {
			return Alpine.store('darkMode').getCurrentTheme() === 'system' ? 'activeTheme' : ''
		}
	},
	navBarThemeContentLight: {
		':class'() {
			return Alpine.store('darkMode').getCurrentTheme() === 'light' ? 'activeTheme' : ''
		}
	},
	navBarThemeContentDark: {
		':class'() {
			return Alpine.store('darkMode').getCurrentTheme() === 'dark' ? 'activeTheme' : ''
		}
	},
	navBarContentLg: {
		['x-show']() {
			return this.showNavBar || this.$screen('lg')
		}
	},
	popupNavContentLg: {
		['x-show']() {
			return this.showPopupNav || !this.$screen('lg')
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

Alpine.data('toggleList', function () {
	return {
		expandList: this.$persist(true).as('expandListState-' + this.$root.dataset.title),
		toggleItem() {
			this.expandList = !this.expandList
		},
		iconContent: {
			':class'() {
				return this.expandList ? 'rotate-90' : '';
			}
		}
	}
})

Alpine.data('collapseContent', () => ({
	contentVisible: false,
	toggleContent() {
		this.contentVisible = !this.contentVisible
	},
	contentIsVisible() {
		return this.contentVisible
	},
	contentIsHidden() {
		return !this.contentVisible
	},
	iconContent: {
		':class'() {
			return this.contentVisible ? '-rotate-90' : '';
		}
	}
}))

Alpine.data('postNavigateArticle', () => ({
	buttonState: false,
	showButton() {
		this.buttonState = true
	},
	hideButton() {
		this.buttonState = false
	},
	buttonVisible() {
		return this.buttonState
	}
}))

Alpine.data('optionsToggle', () => ({
	optionsState: false,
	showOptions() {
		this.optionsState = true
	},
	hideOptions() {
		this.optionsState = false
	},
	optionsVisible() {
		return this.optionsState || this.$screen('sm')
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