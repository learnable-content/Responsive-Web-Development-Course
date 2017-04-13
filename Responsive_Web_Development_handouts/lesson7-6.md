![](headings/7.6.png)

In this section we are going to style the contact section of the page. 

Tweak the markup inside the *index.html* file:

```html
<section class="contact section" id="contact">
		<div class="contact__wrapper ma">
			<h2 class="contact__title section__title">Contact Me</h2>
			<p class="contact__intro-text section__intro-text">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
			</p>

			<form action="#" class="contact-form">
				<div class="grid">
					<div class="contact-form__container grid-lg--4">
					 	<label class="contact-form__label" for="contact-form__name">Name</label>
					 	<input type="text" name="name" class="contact-form__field" id="contact-form__name">
					</div>
					<div class="contact-form__container grid-lg--4">
					 	<label class="contact-form__label" for="contact-form__phone">Phone</label>
					 	<input type="tel" name="phone" class="contact-form__field" id="contact-form__phone">
					</div>
					<div class="contact-form__container grid-lg--4">
					 	<label class="contact-form__label" for="contact-form__email">Email</label>
					 	<input type="email" name="email" class="contact-form__field" id="contact-form__email">
					</div>
				</div> <!-- .grid -->
				<div class="contact-form__container">
					<label class="contact-form__label" for="contact-form__message">Message</label>
					<textarea name="message" class="contact-form__field contact-form__field--message" id="contact-form__message"></textarea>
				</div>
				
				<div class="ac">
					<button class="contact-form__button">
						Send Message
					</button>
				</div>
			</form>
		</div> <!-- .contact__wrapper -->
</section>
```

Modify the *pages/_contact.scss* file:

```sass
//
//-- Contact Me
//

.contact {
	background: $color-base;
	margin-bottom: 0;

	.section__title, .section__intro-text {
		color: #FFF;
	}
}

.contact__wrapper {
	max-width: em(978);
	padding: em(150) 0;
}

.contact-form {
	font-size: em(18);
}

.contact-form__container {
	margin-bottom: 0.75em;
}

.contact-form__label {
	display: block;
	color: #FFF;
	margin-bottom: 0.2em;
}

.contact-form__field {
	display: block;
	padding: 0.5em;
	color: #4d4d4d;
	border: 0;
	background: #FFF;
	width: 100%;
	transition: background 0.2s ease;
	
	// remove Safari's rounded corners
	border-radius: 0;
	-webkit-appearance: none;

	&:focus {
		background: #FFC;
	}
}

.contact-form__field--message {
	height: 8em;
	margin-bottom: 2em;
}

.contact-form__button {
	font-weight: bold;
	border: 0;
	color: #FFF;
	text-transform: uppercase;
	background: linear-gradient(90deg, $color-gradient1, $color-gradient2);
	padding: 1em 2em;
	transition: transform 0.2s ease;

	&:hover {
		transform: scale(1.1);
	}
}
```

