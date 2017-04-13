![](headings/7.7.png)

In this section we are going to focus on the responsiveness of each element of the page. It will not be that difficult, as we have already planned for this since the start. As explained earlier, we are going to use a mobile first approach, even though we have been developing the large screen version of the page so far.

Using Sass, a task like this becomes much easier. First we'll add a simple hamburger menu in place of the regular navigation for small screens. We'll need to edit a bit of the HTML inside the *index.html*:

```html
	<header class="page-header">
		<nav class="page-nav">
			<span class="page-nav__hamburger">
				<i class="fa fa-bars" aria-label="Menu"></i>
			</span>
			<ul class="page-nav__ul">
				<li class="page-nav__li">
					<a href="#services" class="page-nav__item">Services</a>
				</li>
				<li class="page-nav__li">
					<a href="#portfolio" class="page-nav__item">Portfolio</a>
				</li>
				<li class="page-nav__li">
					<a href="#blog" class="page-nav__item">Blog</a>
				</li>
				<li class="page-nav__li">
					<a href="#contact" class="page-nav__item">Contact Me</a>
				</li>
			</ul>
		</nav>
</header>
```

`<i class="fa fa-bars" aria-label="Menu"></i>` will be the hamburger menu icon. I'm not using an `a` tag here because it's not really a link to anywhere.

Now we'll need to write some JavaScript. To make things easier, I'll use a light jQuery-like library called Zepto. You can download this library at [zeptojs.com](http://zeptojs.com). Create a *js* folder in the *src* folder of our project. Copy *zepto.min.js* there and also create another file called *main.js*.

Next load these files at the bottom of the page:

```html
<script src="js/zepto.min.js"></script>
<script src="js/main.js"></script>
```

These files must be carried over to the *dist* folder as well, so modify the *gulpfile.js*:

```js
gulp.task('copy', function() {
	return gulp.src('src/**/*.+(html|js)')
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.stream())
});
```

Tweak the *js/main.js* file:

```js
(function() {

	$('.page-nav__hamburger').on('click', function() {
		$('.page-nav__ul').toggle();
	});

})();
```

Tweak the *structure/_header.scss* file:

```sass
.page-nav {
	background: $color-base;
	color: #FFF;
	text-align: center;
	padding: 1em 0 0;

	@include tablet-port {
		padding: 1.5em;
	}
}

.page-nav__li {
	position: relative;
	border-bottom: 1px solid #CCC;
	
	@include tablet-port {
		border: 0;
		display: inline-block;

		&::after {
			content: "-";
			position: absolute;
			top: 50%;
			right: -0.15em;
			transform: translate(0, -50%);
		}

		&:last-child::after {
			display: none;
		}
	}
}

.page-nav__item {
	display: block;
	color: inherit;
	text-decoration: none;
	text-transform: uppercase;
	transition: opacity 0.2s ease;
	padding: 0.5em 1em;

	&:hover {
		opacity: 0.7;
	}

	@include tablet-port {
		font-size: em(18);
		padding: 1em 2em;
	}
}

.page-nav__hamburger {
	display: inline-block;
	cursor: pointer;
	transition: transform 0.2s ease;
	margin-bottom: 1em;

	&:hover {
		transform: scale(1.2);
	}

	@include tablet-port {
		display: none;
	}
}

.page-nav__ul {
	display: none;

	@include tablet-port {
		display: block !important;
}
```

