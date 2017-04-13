![](headings/5.3.png)

Now we're going to finish our Sass base by applying some reset styles, setting up some helper classes, and by installing the Font Awesome and Open Sans fonts in our website. Let's begin with embedding of the fonts. The design uses the Open Sans font for all text.

Head to [fonts.google.com](http://fonts.google.com) to get the embed code. Find Open Sans and in the Customize tab select the light, semi-bold, and bold weights, and then get the embed code. Place it inside the `head` tag.

The icons in the design use the Font Awesome icon font. Go to [fontawesome.io](http://fontawesome.io) to get an embed code as well. You have to supply your email address, and then you'll receive an email like this with the code in it. You can also create an account if you like, so you can change some settings.

Now let's set up some basic styles for the website. Tweak the *base/_reset.scss* file:

```sass
//
// -- Reset Styles
//

*, *::before, *::after {
	box-sizing: border-box;
}

* {
	margin: 0;
	padding: 0;
}

h1, h2, h3, h4, h5, h6 {
	font-weight: normal;
}

ul {
	list-style: none;
}

img, video, embed, object {
	max-width: 100%;
}

img {
	vertical-align: middle;
}

label, button {
	cursor: pointer;
}
```

Many people like to use a complete CSS reset but I think that for a small project, just a few rules are enough.

*base/_helper_classes.scss*:

```sass
//
//-- Helper Classes
//

.clearfix {
	&::before, &::after {
		content: "";
		display: table;
	}

	&::after {
		clear: both;
	}
}
```

Notice the Sass nesting and the use of the ampersand `&`. It means the parent, so before and after clearfix, we apply the `content` property and `display: table`. This will be necessary to work with our grid system and with other kinds of floated elements.

Finally, some general typography styles at *base/_typography.scss*:

```sass
//
//-- General Typography
//

html, body {
	background: #FFF;
	color: #000;
}

body, input, select, textarea, button {
	font-family: "Open Sans", sans-serif;
	font-size: 100%;
}
```

In a larger website, I usually set some general styles for headings and paragraphs. However, as each section of this website will have its specific styles and we are scoping everything with the BEM syntax, let's just create some basic rules. For html and body, confirm that the background will be white and that the font color of the text will be black. It's important to set these styles. In the main form elements which do not automatically inherent font size and family, we assign them the Open Sans font and a font-size of 100% or 1em or 16px.

With these basic rules set, we conclude this lesson.

