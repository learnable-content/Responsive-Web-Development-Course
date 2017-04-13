![](headings/4.3.png)

Now that we have the main structural elements in place, let's code the page content. There are five sections in total: Welcome, Services, Portfolio, Blog, and Contact.

We'll start from the top with the Welcome section. This one is very simple. We just have a centered title with two font sizes:

```html
<section class="welcome section">
	<h1 class="welcome__title">
		Welcome
		<span class="welcome__title-complement">
			to my Personal Portfolio
		</span>
	</h1>
</section>
```

Next, services:

```html
<section class="services section" id="services">
		<h2 class="services__title section__title">Services</h2>
		<p class="services__intro-text section__intro-text">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit.
		</p>

		<ul class="services__list">
			<li class="services__item services--1">
				<div class="services__item-icon"></div>
				<h3 class="services__item-title">
					Best Service
				</h3>
				<p class="services__item-description">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio at vel, incidunt quo laborum rerum adipisci.
				</p>
			</li>
			<li class="services__item services--2">
				<div class="services__item-icon"></div>
				<h3 class="services__item-title">
					Best Service
				</h3>
				<p class="services__item-description">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio at vel, incidunt quo laborum rerum adipisci.
				</p>
			</li>
			<li class="services__item services--3">
				<div class="services__item-icon"></div>
				<h3 class="services__item-title">
					Best Service
				</h3>
				<p class="services__item-description">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio at vel, incidunt quo laborum rerum adipisci.
				</p>
			</li>
			<li class="services__item services--4">
				<div class="services__item-icon"></div>
				<h3 class="services__item-title">
					Best Service
				</h3>
				<p class="services__item-description">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio at vel, incidunt quo laborum rerum adipisci.
				</p>
			</li>
			<li class="services__item services--5">
				<div class="services__item-icon"></div>
				<h3 class="services__item-title">
					Best Service
				</h3>
				<p class="services__item-description">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio at vel, incidunt quo laborum rerum adipisci.
				</p>
			</li>
			<li class="services__item services--6">
				<div class="services__item-icon"></div>
				<h3 class="services__item-title">
					Best Service
				</h3>
				<p class="services__item-description">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio at vel, incidunt quo laborum rerum adipisci.
				</p>
			</li>
		</ul>
</section>
```

The next section is the portfolio:

```html
<section class="portfolio section" id="portfolio">
		<h2 class="portfolio__title section__title">Portfolio</h2>
		<p class="portfolio__intro-text section__intro-text">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit.
		</p>
				
		<div class="portfolio__nav-column">
			<ul class="portfolio__nav">
				<li class="portfolio__nav-li">
					<a class="portfolio__nav-item is-active" href="#">All</a>
				</li>
				<li class="portfolio__nav-li">
					<a class="portfolio__nav-item" href="#">Print</a>
				</li>
				<li class="portfolio__nav-li">
					<a class="portfolio__nav-item" href="#">Editorial</a>
				</li>
				<li class="portfolio__nav-li">
					<a class="portfolio__nav-item" href="#">Web</a>
				</li>
				<li class="portfolio__nav-li">
					<a class="portfolio__nav-item" href="#">Logo</a>
				</li>
			</ul>
		</div>
				 
		<div class="portfolio__list-column">
			<ul class="portfolio__list">
				<li>
					<a class="portfolio__item" href="#">
						<img src="images/portfolio_thumb.jpg" alt="Thumbnail for [portfolio entry]">
					</a>
				</li>
				<li>
					<a class="portfolio__item" href="#">
						<img src="images/portfolio_thumb.jpg" alt="Thumbnail for [portfolio entry]">
					</a>
				</li>
				<li>
					<a class="portfolio__item" href="#">
						<img src="images/portfolio_thumb.jpg" alt="Thumbnail for [portfolio entry]">
					</a>
				</li>
				<li>
					<a class="portfolio__item" href="#">
						<img src="images/portfolio_thumb.jpg" alt="Thumbnail for [portfolio entry]">
					</a>
				</li>
				<li>
					<a class="portfolio__item" href="#">
						<img src="images/portfolio_thumb.jpg" alt="Thumbnail for [portfolio entry]">
					</a>
				</li>
				<li>
					<a class="portfolio__item" href="#">
						<img src="images/portfolio_thumb.jpg" alt="Thumbnail for [portfolio entry]">
					</a>
				</li>
			</ul>
		</div>
</section>
```

Here for the "All" link I am taking one idea from SMACSS methodology and use a class called `is-active`. This way, we can easily select it when coding the CSS.

Next up is the blog section:

```html
<section class="blog section" id="blog">
		<h2 class="blog__title section__title">Blog</h2>
		<p class="blog__intro-text section__intro-text">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit.
		</p>
		 
		<ul class="blog__list">
			<li class="blog__item">
				<div class="blog__item-image-container">
					<a href="#">
						<img src="images/post_thumb.jpg" alt="Thumbnail for [post title]">
					</a>
				</div>
				<header class="blog__item-header">
					<span class="blog__item-tags">
						<a class="blog__item-tag" href="#">General</a>
					</span>
					<h3 class="blog__item-title">
						<a href="#">Lorem Ipsum</a>
					</h3>
				</header>
				<div class="blog__item-excerpt">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque quod sit delectus expedita in similique ipsum doloribus reiciendis autem ea, accusantium dolorem temporibus perspiciatis repudiandae quam architecto aut, modi quibusdam.
					</p>
					<a href="#" class="blog__item-read">Read more</a>
				</div>
			</li>
			<li class="blog__item">
				<div class="blog__item-image-container">
					<a href="#">
						<img src="images/post_thumb.jpg" alt="Thumbnail for [post title]">
					</a>
				</div>
				<header class="blog__item-header">
					<span class="blog__item-tags">
						<a class="blog__item-tag" href="#">General</a>
					</span>
					<h3 class="blog__item-title">
						<a href="#">Lorem Ipsum</a>
					</h3>
				</header>
				<div class="blog__item-excerpt">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque quod sit delectus expedita in similique ipsum doloribus reiciendis autem ea, accusantium dolorem temporibus perspiciatis repudiandae quam architecto aut, modi quibusdam.
					</p>
					<a href="#" class="blog__item-read">Read more</a>
				</div>
			</li>
			<li class="blog__item">
				<div class="blog__item-image-container">
					<a href="#">
						<img src="images/post_thumb.jpg" alt="Thumbnail for [post title]">
					</a>
				</div>
				<header class="blog__item-header">
					<span class="blog__item-tags">
						<a class="blog__item-tag" href="#">General</a>
					</span>
					<h3 class="blog__item-title">
						<a href="#">Lorem Ipsum</a>
					</h3>
				</header>
				<div class="blog__item-excerpt">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque quod sit delectus expedita in similique ipsum doloribus reiciendis autem ea, accusantium dolorem temporibus perspiciatis repudiandae quam architecto aut, modi quibusdam.
					</p>
					<a href="#" class="blog__item-read">Read more</a>
				</div>
			</li>
		</ul>
</section>
```

Next, contacts:

```html
<section class="contact section" id="contact">
		<h2 class="contact__title section__title">Contact Me</h2>
		<p class="contact__intro-text section__intro-text">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit.
		</p>
		
		<form action="#" class="contact-form">
			<div class="contact-form__container">
			 	<label class="contact-form__label" for="contact-form__name">Name</label>
			 	<input type="text" name="name" class="contact-form__field" id="contact-form__name">
			</div>
			<div class="contact-form__container">
			 	<label class="contact-form__label" for="contact-form__phone">Phone</label>
			 	<input type="tel" name="phone" class="contact-form__field" id="contact-form__phone">
			</div>
			<div class="contact-form__container">
			 	<label class="contact-form__label" for="contact-form__email">Email</label>
			 	<input type="email" name="email" class="contact-form__field" id="contact-form__email">
			</div>
			<div class="contact-form__container">
				<label class="contact-form__label" for="contact-form__message">Message</label>
				<textarea name="message" class="contact-form__field contact-form__field--message" id="contact-form__message"></textarea>
			</div>
			
			<button class="contact-form__button">
				Send Message
			</button>
		</form>
</section>
```

And lastly the footer:

```html
<footer class="page-footer">
		<div class="footer-module footer-module--call-me">
		 	<div class="footer-module__icon"></div>
		 	<div class="footer-module__content">
		 		<h2 class="footer-module__title">Call Me</h2>
		 		<p class="footer-module__text">
		 			+55 41 3333-3333
		 			<br>
		 			+55 41 999-999-999
		 		</p>
		 	</div>
		</div>
		 		 
		<div class="footer-module footer-module--address">
		 	<div class="footer-module__icon"></div>
		 	<div class="footer-module__content">
		 		<h2 class="footer-module__title">Address</h2>
		 		<p class="footer-module__text">
		 			50 Portfolio Street
		 			<br>
		 			Curitiba, PR, Brazil
		 		</p>
		 	</div>
		</div>
		 		 
		<div class="footer-module footer-module--email">
		 	<div class="footer-module__icon"></div>
		 	<div class="footer-module__content">
		 		<h2 class="footer-module__title">Send me an email</h2>
		 		<p class="footer-module__text">
		 			<a href="mailto:me@myportfolio.com">me@myportfolio.com</a>
		 		</p>
		 	</div>
		</div>
</footer>
```