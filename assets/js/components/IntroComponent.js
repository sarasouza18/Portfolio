import { introContent } from './data/introContent.js';

export default {
    template: `
    <section class="intro">
        <div class="intro__container">
            <p class="intro__text">
                {{ introContent.description }}
            </p>
        </div>
    </section>
    `,
    data() {
        return {
            introContent
        };
    }
};