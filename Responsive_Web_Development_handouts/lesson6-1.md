![](headings/6.1.png)

In this lesson we are going to talk about grids.

**Grids** are a very important part of our layouts. It's good to have a solid system established before we start the main styling of the website. Using grids is a commonly used technique because it allows us to organize elements in space in a predictable and orderly manner which is pleasing to the eye. Web designers began using grids as soon as HTML table layouts were possible.

In this course we will build a responsive grid system using floats that can later be adapted to a flexbox solution. The idea is that based on that of the Bootstrap framework. It's a 12 column grid that has a clearfixed container with negative margins inside it. Every element has to have a `grid-column` class that positions it within the container.

The responsive part of the grid consists in two ideas. One is that the grid is based on percentages so it adapts to the width of its container. The other is that we can have different kinds of grids for different break points. Using for that the power of the preprocessor so we do not have to type everything. Following Bootstrap's grid system will have far different grids. And extra small grids for small screens which is the default without the media query. Then there are small, medium and large grids, each one with a different breakpoint.

Every column inside the grid has to have at least a `grid-xs` class. Then we can progressively add larger grid classes for larger screens. For example if a div has a grid-xs graph and the grid-xs class and that looks good on a light screen. I do not need to add classes for the other two breakpoints.

The cumulative nature of the media queries will take care of it. As I'm developing on the desktop usually I start the website using the larger grid classes. Then at some point I start accessing different kinds of screens and take the reverse approach. Adding smaller grid classes and removing the larger grid classes if necessary.

The media queries based in min width conditions assured that the final result will be mobile first so don't worry about that. With the general concept out of the way you'll create a first example using only CSS. Then turn it into a mixing and into a complete responsive grid system.

