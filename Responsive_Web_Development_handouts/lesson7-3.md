![](headings/7.3.png)

In this section we are going to style the services section of the page in addition to creating some general styles for all the sections of the website.

First, add proper icons in the *index.html* file:

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

Now tweak the *pages/_services.scss* file:

```sass
//
//-- Services
//

.services__item {
	text-align: center;
	margin-bottom: 4em;
	font-size: em(18);
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
