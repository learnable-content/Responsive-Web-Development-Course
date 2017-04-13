![](headings/7.1.png)

Now it's time to start styling the website. We'll begin with the header and welcome areas of the page.

The header of this website is very simple. In fact, it's just a navigation menu. Tweak *structure/_header.scss*:

```sass
//
//-- Header
//

.page-nav {
	background: $color-base;
	color: #FFF;
	text-align: center;
	padding: 1.5em;
}

.page-nav__li {
	display: inline-block;
	position: relative;
	
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

.page-nav__item {
	display: block;
	color: inherit;
	text-decoration: none;
	text-transform: uppercase;
	transition: opacity 0.2s ease;
	font-size: em(18);
	padding: 1em 2em;

	&:hover {
		opacity: 0.7;
	}
}
```

Let's style the welcome section, so, open the *pages/_welcome.scss* file:

```sass
//
//-- Welcome
//

.welcome {
	background: $color-base url(../images/welcome_background.jpg) no-repeat center center;
	background-size: cover;
	position: relative;
	height: em(740);
}

.welcome__title {
	font-size: rem(118);
	text-transform: uppercase;
	font-weight: 300;
	color: #FFF;
	text-shadow: 2px 2px 2px rgba(0,0,0,0.75);
	line-height: 1;
	text-align: center;
	@include vertical-center;
}

.welcome__title-complement {
	font-size: rem(36);
	display: block;
	font-weight: 600;
}
```

We are using a new mixin here so add it to the *mixins/_mixins_general.scss*:

```sass
@mixin vertical-center {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
```

With that we have the header and welcome areas styled.