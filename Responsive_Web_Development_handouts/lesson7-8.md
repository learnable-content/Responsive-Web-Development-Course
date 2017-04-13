![](headings/7.8.png)

In this section, we'll finish the work on our project by fine-tuning the responsiveness of each element in the page.

Let's start with the welcome section and adjust the font size and the height of the section. First, let's add some changes to the welcome block itself:

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

*pages/_welcome.scss*:

```sass
.welcome {
	background: $color-base url(../images/welcome_background.jpg) no-repeat center center;
	background-size: cover;
	position: relative;
	height: em(200);

	@include tablet-port {
		height: em(350);
	}

	@include wide {
		height: em(600);
	}

	@include very-wide {
		height: em(740);
	}

	@include retina {
		background-image: url(../images/welcome_background@2x.jpg);
	}
}

.welcome__title {
	font-size: rem(48);
	text-transform: uppercase;
	font-weight: 300;
	color: #FFF;
	text-shadow: 2px 2px 2px rgba(0,0,0,0.75);
	line-height: 1;
	text-align: center;
	
	@include vertical-center;

	@include tablet-port {
		font-size: rem(72);
	}

	@include wide {
		font-size: rem(118);
	}
}

.welcome__title-complement {
	font-size: rem(14);
	display: block;
	font-weight: 600;

	@include tablet-port {
		font-size: rem(24);
	}

	@include wide {
		font-size: rem(36);
	}
}
```

Let's turn to the services section now:

```html
<section class="services section" id="services">
		<div class="site-width ma">
			<h2 class="services__title section__title">Services</h2>
			<p class="services__intro-text section__intro-text">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
			</p>

			<ul class="services__list grid">
				<li class="services__item services--1 grid-lg--4">
					<div class="services__item-icon">
						<i class="fa fa-cogs" aria-hidden="true"></i>
					</div>
					<h3 class="services__item-title">
						Best Service
					</h3>
					<p class="services__item-description">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio at vel, incidunt quo laborum rerum adipisci.
					</p>
				</li>
				<li class="services__item services--2 grid-lg--4">
					<div class="services__item-icon">
						<i class="fa fa-link" aria-hidden="true"></i>
					</div>
					<h3 class="services__item-title">
						Best Service
					</h3>
					<p class="services__item-description">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio at vel, incidunt quo laborum rerum adipisci.
					</p>
				</li>
				<li class="services__item services--3 grid-lg--4">
					<div class="services__item-icon">
						<i class="fa fa-window-restore" aria-hidden="true"></i>
					</div>
					<h3 class="services__item-title">
						Best Service
					</h3>
					<p class="services__item-description">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio at vel, incidunt quo laborum rerum adipisci.
					</p>
				</li>
				<li class="services__item services--4 grid-lg--4">
					<div class="services__item-icon">
						<i class="fa fa-rocket" aria-hidden="true"></i>
					</div>
					<h3 class="services__item-title">
						Best Service
					</h3>
					<p class="services__item-description">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio at vel, incidunt quo laborum rerum adipisci.
					</p>
				</li>
				<li class="services__item services--5 grid-lg--4">
					<div class="services__item-icon">
						<i class="fa fa-plug" aria-hidden="true"></i>
					</div>
					<h3 class="services__item-title">
						Best Service
					</h3>
					<p class="services__item-description">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio at vel, incidunt quo laborum rerum adipisci.
					</p>
				</li>
				<li class="services__item services--6 grid-lg--4">
					<div class="services__item-icon">
						<i class="fa fa-lightbulb-o" aria-hidden="true"></i>
					</div>
					<h3 class="services__item-title">
						Best Service
					</h3>
					<p class="services__item-description">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio at vel, incidunt quo laborum rerum adipisci.
					</p>
				</li>
			</ul>
		</div> <!-- .site-width -->
</section>
```

```sass
.services__item {
	margin-bottom: 2em;
	text-align: center;
	font-size: em(14);

	@include tablet-port {
		margin-bottom: 3em;
		font-size: em(16);
	}

	@include wide {
		margin-bottom: 4em;
		font-size: em(18);
	}
}

.services__item-icon {
	font-size: em(45);
	display: inline-block;
	width: rem(115);
	height: rem(115);
	background: linear-gradient(45deg, $color-gradient1, $color-gradient2);
	border-radius: 100%;
	margin-bottom: 1.3rem;
	position: relative;
	color: #FFF;

	.fa {
		@include vertical-center;
	}
}

.services__item-title {
	font-size: em(25);
	font-weight: bold;
	margin-bottom: 1.3rem;
	text-transform: uppercase;
	color: #4d4d4d;
}

.services__item-description {
	color: #494949;
	line-height: 1.9;
}
```

Portfolio section:

```html
<section class="portfolio section" id="portfolio">
		<div class="site-width ma">
			<h2 class="portfolio__title section__title">Portfolio</h2>
			<p class="portfolio__intro-text section__intro-text">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
			</p>
			
			<div class="grid">
				<div class="portfolio__nav-column grid-lg--2">
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
						 
				<div class="portfolio__list-column grid-lg--10">
					<ul class="portfolio__list grid">
						<li class="grid-lg--6">
							<a class="portfolio__item" href="#">
								<img src="images/portfolio_thumb.jpg" alt="Thumbnail for [portfolio entry]">
							</a>
						</li>
						<li class="grid-lg--6">
							<a class="portfolio__item" href="#">
								<img src="images/portfolio_thumb.jpg" alt="Thumbnail for [portfolio entry]">
							</a>
						</li>
						<li class="grid-lg--6">
							<a class="portfolio__item" href="#">
								<img src="images/portfolio_thumb.jpg" alt="Thumbnail for [portfolio entry]">
							</a>
						</li>
						<li class="grid-lg--6">
							<a class="portfolio__item" href="#">
								<img src="images/portfolio_thumb.jpg" alt="Thumbnail for [portfolio entry]">
							</a>
						</li>
						<li class="grid-lg--6">
							<a class="portfolio__item" href="#">
								<img src="images/portfolio_thumb.jpg" alt="Thumbnail for [portfolio entry]">
							</a>
						</li>
						<li class="grid-lg--6">
							<a class="portfolio__item" href="#">
								<img src="images/portfolio_thumb.jpg" alt="Thumbnail for [portfolio entry]">
							</a>
						</li>
					</ul>
				</div> <!-- .portfolio__list-column -->
			</div> <!-- .grid -->
		</div> <!-- .site-width -->
</section>
```

```sass
.portfolio__nav {
	text-align: center;
	margin-bottom: 2em;

	@include tablet-port {
		text-align: left;
	}
}

.portfolio__nav-li {
	display: inline-block;

	@include tablet-port {
		display: block;
	}
}

.portfolio__nav-item {
	display: inline-block;
	font-size: em(16);
	color: #4d4d4d;
	text-transform: uppercase;
	text-decoration: none;
	font-weight: 600;
	transition: color 0.2s ease;
	margin: 0.3em 0.8em;

	&:hover, &.is-active {
		color: $color-highlight;
	}

	@include tablet-port {
		display: block;
		font-size: em(22);
		margin-bottom: 1.25em;
	}
}

.portfolio__item {
	display: block;
	margin-bottom: 2em;
	text-decoration: none;
	@include hover-border;

	img {
		max-width: none;
		width: 100%;
	}
}
```

We have prepared double resolution pictures in the *images* folder, and we have not included them in the HTML yet. We can use a new attribute fresh from the HTML 5.1 specification to solve this. It's called **source set**:

```html
<section class="portfolio section" id="portfolio">
		<div class="site-width ma">

			<h2 class="portfolio__title section__title">Portfolio</h2>
			<p class="portfolio__intro-text section__intro-text">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
			</p>
		
			<div class="grid">
				<div class="portfolio__nav-column grid-xs--12 grid-md--3 grid-lg--2">
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

				<div class="portfolio__list-column grid-xs--12 grid-md--9 grid-lg--10">
					<ul class="portfolio__list grid">
						<li class="grid-xs--12 grid-sm--6">
							<a class="portfolio__item" href="#">
								<img src="images/portfolio_thumb.jpg" srcset="images/portfolio_thumb.jpg 1x, images/portfolio_thumb@2x.jpg 2x" alt="Thumbnail for [portfolio entry]">
							</a>
						</li>
						<li class="grid-xs--12 grid-sm--6">
							<a class="portfolio__item" href="#">
								<img src="images/portfolio_thumb.jpg" srcset="images/portfolio_thumb.jpg 1x, images/portfolio_thumb@2x.jpg 2x" alt="Thumbnail for [portfolio entry]">
							</a>
						</li>
						<li class="grid-xs--12 grid-sm--6">
							<a class="portfolio__item" href="#">
								<img src="images/portfolio_thumb.jpg" srcset="images/portfolio_thumb.jpg 1x, images/portfolio_thumb@2x.jpg 2x" alt="Thumbnail for [portfolio entry]">
							</a>
						</li>
						<li class="grid-xs--12 grid-sm--6">
							<a class="portfolio__item" href="#">
								<img src="images/portfolio_thumb.jpg" srcset="images/portfolio_thumb.jpg 1x, images/portfolio_thumb@2x.jpg 2x" alt="Thumbnail for [portfolio entry]">
							</a>
						</li>
						<li class="grid-xs--12 grid-sm--6">
							<a class="portfolio__item" href="#">
								<img src="images/portfolio_thumb.jpg" srcset="images/portfolio_thumb.jpg 1x, images/portfolio_thumb@2x.jpg 2x" alt="Thumbnail for [portfolio entry]">
							</a>
						</li>
						<li class="grid-xs--12 grid-sm--6">
							<a class="portfolio__item" href="#">
								<img src="images/portfolio_thumb.jpg" srcset="images/portfolio_thumb.jpg 1x, images/portfolio_thumb@2x.jpg 2x" alt="Thumbnail for [portfolio entry]">
							</a>
						</li>
					</ul>
				</div>
			</div> <!-- .grid -->
		</div> <!-- .site-width -->
</section>
```

Now the blog section:

```html
<section class="blog section" id="blog">
		<div class="site-width ma">
			<h2 class="blog__title section__title">Blog</h2>
			<p class="blog__intro-text section__intro-text">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
			</p>
			
			<ul class="blog__list grid">
				<li class="blog__item grid-xs--12 grid-sm--6 grid-lg--4">
					<div class="blog__item-image-container">
						<a href="#">
							<img src="images/post_thumb.jpg" srcset="images/post_thumb.jpg 1x, images/post_thumb@2x.jpg 2x" alt="Thumbnail for [post title]">
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
				<li class="blog__item grid-xs--12 grid-sm--6 grid-lg--4">
					<div class="blog__item-image-container">
						<a href="#">
							<img src="images/post_thumb.jpg" srcset="images/post_thumb.jpg 1x, images/post_thumb@2x.jpg 2x" alt="Thumbnail for [post title]">
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
				<li class="blog__item grid-xs--12 grid-sm--6 grid-lg--4">
					<div class="blog__item-image-container">
						<a href="#">
							<img src="images/post_thumb.jpg" srcset="images/post_thumb.jpg 1x, images/post_thumb@2x.jpg 2x" alt="Thumbnail for [post title]">
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
		</div> <!-- .site-width -->
</section>
```

And the contacts:

```html
<section class="contact section" id="contact">
		<div class="contact__wrapper ma">
			<h2 class="contact__title section__title">Contact Me</h2>
			<p class="contact__intro-text section__intro-text">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
			</p>

			<form action="#" class="contact-form">
				<div class="grid">
					<div class="contact-form__container grid-xs--12 grid-md--4">
						<label class="contact-form__label" for="contact-form__name">Name</label>
						<input type="text" name="name" class="contact-form__field" id="contact-form__name">
					</div>
					<div class="contact-form__container grid-xs--12 grid-md--4">
						<label class="contact-form__label" for="contact-form__phone">Phone</label>
						<input type="tel" name="phone" class="contact-form__field" id="contact-form__phone">
					</div>
					<div class="contact-form__container grid-xs--12 grid-md--4">
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
		</div>
</section>
```

Lastly, a footer:

```html
	<footer class="page-footer">
		<div class="site-width ma">
		<div class="grid">

			<div class="footer-module footer-module--call-me grid-xs--12 grid-md--6 grid-lg--4">
				<div class="footer-module__icon">
					<i class="fa fa-mobile" aria-hidden="true"></i>
				</div>
				<div class="footer-module__content">
					<h2 class="footer-module__title">Call Me</h2>
					<p class="footer-module__text">
						+55 41 3333-3333
						<br>
						+55 41 999-999-999
					</p>
				</div>
			</div>

			<div class="footer-module footer-module--address grid-xs--12 grid-md--6 grid-lg--4">
				<div class="footer-module__icon">
					<i class="fa fa-map-marker" aria-hidden="true"></i>
				</div>
				<div class="footer-module__content">
					<h2 class="footer-module__title">Address</h2>
					<p class="footer-module__text">
						50 Portfolio Street
						<br>
						Curitiba, PR, Brazil
					</p>
				</div>
			</div>

			<div class="footer-module footer-module--email grid-xs--12 grid-md--6 grid-lg--4">
				<div class="footer-module__icon">
					<i class="fa fa-envelope" aria-hidden="true"></i>
				</div>
				<div class="footer-module__content">
					<h2 class="footer-module__title">Send me an email</h2>
					<p class="footer-module__text">
						<a href="mailto:me@myportfolio.com">me@myportfolio.com</a>
					</p>
				</div>
			</div>

		</div> <!-- .grid -->
		</div> <!-- .site-width -->
</footer>
```

And we are finally done. Congratulations again for following along with all this work, the website is completed, responsive, and backed up by an automated front end workflow!

