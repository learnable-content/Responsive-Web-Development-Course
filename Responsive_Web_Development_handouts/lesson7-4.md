![](headings/7.4.png)

Now we are going to style the portfolio section of the page. 

Tweak the markup inside the *index.html*:

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

Tweak *pages/_portfolio.scss*:

```sass
//
//-- Portfolio
//

.portfolio__nav {
	text-align: left;
	margin-bottom: 2em;
}

.portfolio__nav-item {
	color: #4d4d4d;
	text-transform: uppercase;
	text-decoration: none;
	font-weight: 600;
	transition: color 0.2s ease;
	display: block;
	font-size: em(22);
	margin-bottom: 1.25em;

	&:hover, &.is-active {
		color: $color-highlight;
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

