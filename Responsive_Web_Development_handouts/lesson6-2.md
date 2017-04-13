![](headings/6.2.png)

Now that we have seen some concepts of how a grid is built, let's code our own solution based on these ideas.

Here is a very simple HTML file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Grid test</title>

	<link rel="stylesheet" href="grid.css">
</head>
<body>
	
<div class="grid">
	<div class="grid-12">
		<div class="bg">grid</div>
	</div>

	<div class="grid-6">
		<div class="bg">grid</div>
	</div>
	<div class="grid-6">
		<div class="bg">grid</div>
	</div>

	<div class="grid-4">
		<div class="bg">grid</div>
	</div>
	<div class="grid-4">
		<div class="bg">grid</div>
	</div>
	<div class="grid-4">
		<div class="bg">grid</div>
	</div>

	<div class="grid-3">
		<div class="bg">grid</div>
	</div>
	<div class="grid-3">
		<div class="bg">grid</div>
	</div>
	<div class="grid-3">
		<div class="bg">grid</div>
	</div>
	<div class="grid-3">
		<div class="bg">grid</div>
	</div>
</div>

</body>
</html>
```

And that's how styles can look:

```css
* {
	box-sizing: border-box;
}

body {
	max-width: 60em;
	margin: 2em auto;
	font-family: sans-serif;
	overflow-x: hidden;
}

.bg {
	background: #EEE;
	padding: 0.2em;
	margin-bottom: 1em;
}

.grid::before, .grid::after {
	content: "";
	display: table;
}

.grid::after {
	clear: both;
}

.grid {
	margin-left: -10px !important;
	margin-right: -10px !important;
}

.grid-1,
.grid-2,
.grid-3,
.grid-4,
.grid-5,
.grid-6,
.grid-7,
.grid-8,
.grid-9,
.grid-10,
.grid-11,
.grid-12
{
	float: left;
	padding-left: 10px;
	padding-right: 10px;
}

.grid-12 {
	width: 100%;
}

.grid-11 {
	width: calc(8.333333333333333% * 11);
}

.grid-10 {
	width: calc(8.333333333333333% * 10);
}

.grid-9 {
	width: calc(8.333333333333333% * 9);
}

.grid-8 {
	width: calc(8.333333333333333% * 8);
}

.grid-7 {
	width: calc(8.333333333333333% * 7);
}

.grid-6 {
	width: calc(8.333333333333333% * 6);
}

.grid-5 {
	width: calc(8.333333333333333% * 5);
}

.grid-4 {
	width: calc(8.333333333333333% * 4);
}

.grid-3 {
	width: calc(8.333333333333333% * 3);
}

.grid-2 {
	width: calc(8.333333333333333% * 2);
}

.grid-1 {
	width: calc(8.333333333333333% * 1);
}
```

In the next section we will apply this concept to our project.

