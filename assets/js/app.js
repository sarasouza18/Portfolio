import HeaderComponent from './components/HeaderComponent.js';
import IntroComponent from './components/IntroComponent.js';
import AboutComponent from './components/AboutComponent.js';
import ContactComponent from './components/ContactComponent.js';

new Vue({
    el: '#app',
    components: {
        'header-component': HeaderComponent,
        'intro-component': IntroComponent,
        'about-component': AboutComponent,
        'contact-component': ContactComponent
    },
    data: {
        activeSection: 'home'
    },
    methods: {
        setActiveSection(section) {
            this.activeSection = section;
        }
    },
    template: `
        <div>
            <header-component :activeSection="activeSection" @change-section="setActiveSection"></header-component>
            <intro-component v-if="activeSection === 'home'"></intro-component>
            <about-component v-if="activeSection === 'about'"></about-component>
            <contact-component v-if="activeSection === 'contact'"></contact-component>
        </div>
    `
});
