import { contactContent } from './data/contactContent.js';

export default {
  template: `
    <section id="contact" class="contact-section">
        <h2 class="contact__title">Get in Touch</h2>
        <div class="contact__info">
            <p>
                <i class="fas fa-phone-alt contact__icon"></i>
                <strong>Phone:</strong>
                <a href="'tel:' + contactContent.phone">{{ contactContent.phone }}</a>
            </p>
            <p>
                <i class="fas fa-envelope contact__icon"></i>
                <strong>Email:</strong> 
                <a href="mailto:contactContent.email">{{ contactContent.email }}</a>
            </p>
            <p>
                <i class="fab fa-github contact__icon"></i>
                <strong>GitHub:</strong> 
                <a href="contactContent.github" target="_blank">{{ contactContent.github }}</a>
            </p>
            <p>
                <i class="fab fa-linkedin contact__icon"></i>
                <strong>LinkedIn:</strong> 
                <a href="contactContent.linkedin" target="_blank">{{ contactContent.linkedin }}</a>
            </p>
        </div>
    </section>
  `,
  data() {
    return {
      contactContent
    };
  }
};
