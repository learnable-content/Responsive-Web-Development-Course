![](headings/7.5.png)

In this section, we are going to style the blog section of the page.

Tweak the markup inside the *index.html* file:

```html
<section class="blog section" id="blog">
		<div class="site-width ma">
			<h2 class="blog__title section__title">Blog</h2>
			<p class="blog__intro-text section__intro-text">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
			</p>
			 
			<ul class="blog__list grid">
				<li class="blog__item grid-lg--4">
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
				<li class="blog__item grid-lg--4">
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
				<li class="blog__item grid-lg--4">
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
		</div> <!-- .site-width -->
</section>
```

Next modify the *pages/_blog.scss* file:

```sass
//
//-- Blog
//

.blog__item {
	font-size: em(18);
	margin-bottom: 4em;
}

.blog__item-image-container {
	margin-bottom: 1.5em;

	a {
		display: block;
		@include hover-border;
	}

	img {
		max-width: none;
		width: 100%;
	}
}

.blog__item-header, .blog__item-excerpt {
	padding: 0 3px;
}

.blog__item-tag {
	display: inline-block;
	text-transform: uppercase;
	font-weight: 600;
	color: #929292;
	margin-bottom: 0.5em;
	@include hover-underline;
}

.blog__item-title {
	font-weight: bold;
	color: $color-base;
	font-size: em(20);
	margin-bottom: 1rem;

	a {
		color: inherit;
		@include hover-underline;
	}
}

.blog__item-excerpt {
	color: #494949;
	line-height: 1.9;
	
	p {
		margin-bottom: 1.5em;
	}
}

.blog__item-read {
	display: block;
	text-align: right;
	color: $color-highlight;
	font-weight: bold;
	@include hover-underline;

	&::after {
		content: " \00bb";
	}
}
```

