![](headings/7.2.png)

Next, we are going to style the footer of our website.

First, use Font Awesome icons in the footer, so tweak *index.html* file:

```html
	<footer class="page-footer">
		<div class="site-width ma">
		<div class="grid">

			<div class="footer-module footer-module--call-me grid-lg--4">
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
			 		 
			<div class="footer-module footer-module--address grid-lg--4">
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
			 		 
			<div class="footer-module footer-module--email grid-lg--4">
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

Introduce two helper classes without BEM inside the *base/_helper_classes.scss* file:

```sass
.ma {
	margin-left: auto;
	margin-right: auto;
}

.site-width {
	max-width: $site-width;
}
```

Lastly, add styles to the *structure/_footer.scss* file:

```sass
//
//-- Footer
//

.page-footer {
	background: #dcdcde;
	padding: em(100) 1.5em;
}

.footer-module {
	margin-bottom: 2em;
	font-size: em(14);

	&:last-child {
		margin-bottom: 0;
	}
}

.footer-module__icon, .footer-module__content {
	display: inline-block;
	vertical-align: top;
}

.footer-module__icon {
	background: $color-base-light;
	width: rem(87);
	height: rem(87);
	border-radius: 100%;
	position: relative;
	font-size: em(45);
	color: #FFF;

	.fa {
		@include vertical-center;
	}
}

.footer-module__content {
	color: #4d4d4d;
	margin-left: 2em;

	a {
		color: inherit;
		@include hover-underline;
	}
}

.footer-module__title {
	text-transform: uppercase;
	font-weight: bold;
	margin-bottom: 1em;
	font-size: 1em;
}
```
