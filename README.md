# Comp Three Looker Visualizations

Comp Three Inc. is a data consulting firm specializing in analytics, migrations and application development. Our innovative analytics tools provide customers with intuitive, decision-ready presentations of data mined from enterprise systems.  We have completed more than 100 major projects for customers such as IBM, Therma Corporation, and major defense contractors, with a track record of on-time and in-budget delivery.


## Image Carousel Visualization

This Image Carousel visualization displays images in a rotating gallery.  Images can be changed by clicking on the arrow controls at the left and right of the component.  If less than 15 images are displayed, control dots are also visible for navigation.

![alt text](https://github.com/compthree/looker-visualizations/raw/master/src/c3_image_carousel/c3_image_carousel.png "Image Carousel")

The Image Carousel visualization accepts both publicly accessible image urls or Base64-encoded image data.  The visualization will search for the first column in your Looker explore which contains one of these formats and will then use that column to populate the image carousel.

A maximum of 25 images is recommended for performance and UX reasons.  If you require the ability to display more images or would prefer a different image visualization, please email Jason at janderson@compthree.com
