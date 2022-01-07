/* *****Alpine.js*****
	Import Alpine.js plugins before Alpine.start()!
*/
import Alpine from 'alpinejs'
import Toolkit from '@alpine-collective/toolkit-screen'

Alpine.plugin(Toolkit)

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