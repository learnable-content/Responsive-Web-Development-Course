![](headings/2.2.png)

We already have a basic plan of how to proceed with the construction of the page based on the design. Now, let's export the necessary assets from the PSD file. The complexity of this task will vary from design to design, but it's interesting to note just how simple this has become in the last years. Today, with the great support for CSS 2 and 3, from our browsers, exporting assets has become a matter of, what CAN'T I do with only CSS? Things like rounded corners, gradients, font embedding, icons, all required us to export images carefully from the PSD file.

I sometimes make a sliced version of the design using the slice tool from Photoshop to outline the images that need to be exported. As we can do most things with HTML and CSS here, I have just sliced the photographs for exporting. Another way to do this if you don't want to use the slice tool is to duplicate each layer to another file.

Use image string, Trimming the transparent pixels, and then use save for web and devices. In my case, I have this large file and I'll use the save for web and devices function, which is under the **File-Export** menu.

For each slice you can choose an image format and quality. As every one of them are photos, I already set them to *.jpg* with high quality. We'll do further optimization with the front end workflow. Let's save all the images in a new folder for our websites. 

One thing that we have to keep in mind there are a lot of devices that have a greater pixel density like double resolution or more. In this case it's recommended to save at least double resolution versions of each image. The design alone can supply that, so usually I'd ask the designer for high resolution assets. So I can generate these files. In the case of this course, you can find the double resolution images in the course files marked with the `@2x` suffix.

Now, we have all the images that we need in the images folder, ready for us begin setting up the development work load.