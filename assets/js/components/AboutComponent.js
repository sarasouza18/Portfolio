import { experiences, skills, personalProjects } from './data/aboutContent.js';

export default {
    template: `
    <section id="about" class="about-section">
        <div class="about__container">
            <h2 class="about__title">My Professional Journey</h2>
            
            <ul class="about__timeline">
                <li v-for="experience in experiences" :key="experience.id" class="about__timeline-item">
                    <div class="about__timeline-icon">
                        <i class="fas fa-briefcase"></i>
                    </div>
                    <div class="about__timeline-content">
                        <h3 class="about__timeline-title">{{ experience.title }} - {{ experience.company }}</h3>
                        <p class="about__timeline-period">{{ experience.period }}</p>
                        <p class="about__timeline-description">{{ experience.description }}</p>
                    </div>
                </li>
            </ul>

            <h2 class="about__skills-title">Skills</h2>
            <ul class="about__skills">
                <li v-for="skill in skills" :key="skill" class="about__skill">{{ skill }}</li>
            </ul>

            <h2 class="about__projects-title">Personal Projects</h2>
            <ul class="about__projects">
                <li v-for="project in personalProjects" :key="project.id" class="about__project">
                    <div class="about__project-icon">
                        <i class="fas fa-code"></i>
                    </div>
                    <div class="about__project-content">
                        <a :href="project.link" target="_blank" class="about__project-link">{{ project.name }}</a>
                        <p class="about__project-description">{{ project.description }}</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    `,
    data() {
        return {
            experiences,
            skills,
            personalProjects
        };
    }
};
