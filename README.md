#### Pixel-Art App

The mail goal of this app is to build a canvas, a 30x30 “pixels” matrix. When the app starts, there is a blank canvas showing up.
There is also a color picker, which shows the colors you can use. A default color is pre-selected when the app starts.
When you click one pixel in the canvas, that pixel will be colored with that default color.


![End Result](./src/end-result.png);

Given the UI that is showed above, we basically need 3 components.

One is the Pixel, a single unit that will compose our drawing.
One is the Canvas, which is a set of 30 rows, each containing 30 Pixel components.
The last one is the ColorPicker, which contains one or more Pixels components.
Clicking a Pixel component inside a ColorPicker will change the active color.
Clicking a Pixel component inside a Canvas will change the background color of the pixel.