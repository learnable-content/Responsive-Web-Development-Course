![](headings/4.2.png)

Let's start by coding the essential tags that will be the foundation for our website, as well as the header and footer areas of the page.

Begin in the `head` tag by coding the meta viewport tag and a link tag for the CSS file:

```html
<head>
	<meta charset="UTF-8">
	<title>Personal Portfolio</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<link rel="stylesheet" href="css/styles.css">
</head>
```

Next, let's create a wrapper for the entire page and the main structural elements:

```html
<body>
	
<div class="page">
	
	<header class="page-header">
		<nav class="page-nav">
			<ul>
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
	<section class="welcome section">
		
	</section>
	<section class="services section" id="services">
		
	</section>
	<section class="portfolio section" id="portfolio">
		
	</section>
	<section class="blog section" id="blog">
					
	</section>
	<section class="contact section" id="contact">
		
	</section>
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

</div>

</body>
```

With this done, the base HTML code of our page is completed, and we are ready to start coding the HTML of each content section.

