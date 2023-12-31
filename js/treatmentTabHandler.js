class TabsManager {
	constructor(tabClassName, paneClassName) {
		this.tabClassName = tabClassName;
		this.paneClassName = paneClassName;
		this.initializeTabs();
	}

	initializeTabs() {
		const tabLinks = document.querySelectorAll(`.${this.tabClassName}`);
		tabLinks.forEach(link => {
			link.addEventListener('click', event => {
				event.preventDefault();
				const tabId = link.getAttribute('href').substring(1);
				this.openTab(tabId);
			});
		});
	}

	openTab(tabId) {
		const tabs = document.querySelectorAll(`.${this.paneClassName}`);
		tabs.forEach(tab => {
			tab.classList.remove('active');
		});

		const tabLinks = document.querySelectorAll(`.${this.tabClassName}`);
		tabLinks.forEach(link => {
			link.classList.remove('active');
		});

		const selectedTab = document.getElementById(tabId);
		const selectedTabLink = document.querySelector(`a[href="#${tabId}"]`);

		if (selectedTab && selectedTabLink) {
			selectedTab.classList.add('active');
			selectedTabLink.classList.add('active');
		}
	}
}

const tabsManager = new TabsManager('treatment-tab__btn', 'tab-pane');
