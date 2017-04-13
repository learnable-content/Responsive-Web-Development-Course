![](headings/2.1.png)

In this lesson I'll walk you through the design, its features and how we will approach its coding. This is a design that has many common characteristics that you see in websites today, such a big font size, big photos, content in columns, and a one page website look.

It's a personal portfolio with the following sections: Welcome, Services, Portfolio, Blog, and Contact. As for the HTML outline, the way it's laid out makes it pretty straightforward: a header element with a navigation followed by sections for each part of the page, ending with a footer.

The first step when building the front end of a website based on a design is to analyze its structure and think about it in terms of code. Let's think about what you'll need for a second.

First, we have a **navigation area**. The links inside are very simple but we also have to think about the responsive design of the page. In many cases you won't have a responsive layout sent along, so, the solution is to get creative and adapt the design based on the ideas presented. For this the navigation area we can use a popular solution, a hamburger menu, when the screen is below a certain width.

Next, we have the **Welcome section**. Here we basically have a big heading on a photograph background. I'd use an image with the background's cover, with a CSS object centering technique for the text.

The **Services section** has a list of six items that have a different icon each. The columns present in the entire design mean that we have to have a grid system of some sort, or else we'll be repeating ourselves. This grid system has to be responsive so that we are able to collapse or change the number of columns depending on the screen width or other criteria. The icons used in the section are from the Font Awesome icon font set. So that's one more thing that needs to be installed in the website.

The **Portfolio section** is rather simple, an image gallery with a lateral navigation. However, upon closer inspection, you can see that here we have a grid and here the image gallery has another one. So the grid system must be able to nest with units as well.

Continuing to the **Blog section**, we have another grid with text and images.

The **Contact section** offers a little challenge, because it has two things that differ from the rest of the layout. There's a background color that bleeds to the sides and the width of the content itself is smaller than that of the rest of the page. So we have to take that into account when coding the HTML and CSS of the entire website. We'll need to have flexibility for different content widths and be able to bleed backgrounds to the full screen width.

Finally, there's the **footer**. This is also a somewhat simple section with a grid and more icons from Font Awesome. Here we have a grid within a grid, too, with a lot of techniques that can work for this kind of content.
