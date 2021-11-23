# Web-Animation

Web animation using JavaScript. 

## Getting Started

Open https://dvsgnr.github.io/Web-Animation/ and just play around. Toggle background bars by clicking 'Hide Bars' button.

### Prerequisites

Just a web browser.

### Logic

This a simple web animation using JavaScript setInterval method. I've built a small function that uses setInterval to execute the animation code at the specified time frame.

I used if/else conditional statements to run code under specific conditions. The first of them is to move two rectangles across the viewport by changing its container style, modifying its margin. Viewport's width is retrieved with innerWidth property and stored on a variable to be used as the window width. Rectangles width is stored in another variable by the clientWidth property. The stop point is found by substracting window's width by rectangles width. The other condition compare's a start value and the stop value to determine the return point.

Another function is added to toggle background bars on and off.

## Authors

* **Dvsgnr**
