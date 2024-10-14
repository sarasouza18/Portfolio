export default {
    template: `
    <header class="header">
        <div class="header__container">
            <div class="header__profile-photo">
                <img src="assets/img/profile.jpeg" alt="Sara Souza" class="header__image">
            </div>
            <h1 class="header__title">Sara Souza</h1>
            <p class="header__subtitle">Software Engineer</p>
            <nav class="header__nav">
                <ul class="header__nav-list">
                    <li class="header__nav-item">
                        <a href="#" @click.prevent="$emit('change-section', 'home')" class="header__nav-link" :class="{ 'header__nav-link--active': activeSection === 'home' }">Home</a>
                    </li>
                    <li class="header__nav-item">
                        <a href="#" @click.prevent="$emit('change-section', 'about')" class="header__nav-link" :class="{ 'header__nav-link--active': activeSection === 'about' }">About Me</a>
                    </li>
                    <li class="header__nav-item">
                        <a href="#" @click.prevent="$emit('change-section', 'contact')" class="header__nav-link" :class="{ 'header__nav-link--active': activeSection === 'contact' }">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    `,
    props: ['activeSection']
};
