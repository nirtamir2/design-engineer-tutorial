---
type: lesson
title: Implementing the background grid lines
focus: /App.css
---

# Creating the background grid

## Defining CSS variables

Now that we have a background - we will define its grid texture.
We will define two CSS variables for the background -

- `--size: 45px`
- `--line: color-mix(in lch, canvasText, transparent 70%);`

We use [`color-mix`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix).

> The color-mix() functional notation takes two <color> values and returns the result of mixing them in a given colorspace by a given amount.

It is a new css feature that gets the color spacing (`in lch`) and colors as param -
and it mix them to get a final color.

[`canvasText`](https://developer.mozilla.org/en-US/docs/Web/CSS/system-color#canvastext) is a keyword the get the text color in application content or documents.
So the result will be 30% the color of `canvasText` - which is a light gray `#ADADAD`.

## Creating the texture

```css
body:before {
  background:
    linear-gradient(90deg, var(--line) 1px, transparent 1px var(--size)) 50% 50% /
      var(--size) var(--size),
    linear-gradient(var(--line) 1px, transparent 1px var(--size)) 50% 50% /
      var(--size) var(--size);
}
```

This CSS background is creating a grid-like pattern using two linear gradients. Here's a breakdown of how it works:

### General Structure

The `background` property is using two `linear-gradient`s, each responsible for drawing either horizontal or vertical lines. Both gradients are repeated across the entire element by specifying a background size.

### Breakdown of Each Gradient:

> The [linear-gradient()](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient) CSS function creates an image consisting of a progressive transition between two or more colors along a straight line. Its result is an object of the <gradient> data type, which is a special kind of image.

1. **First Gradient**:

   ```css
   linear-gradient(90deg, var(--line) 1px, transparent 1px var(--size)) 50% 50% /
   var(--size) var(--size)
   ```

   - **`90deg`**: The gradient is horizontal, running from left to right (90 degrees).
   - **`var(--line) 1px`**: A 1px wide line is colored using the `--line` custom property.
   - **`transparent 1px var(--size)`**: After the 1px line, the rest of the gradient up to the size `--size` is transparent.
   - **`50% 50%`**: Positions the background at the center of the element.
   - **`/ var(--size) var(--size)`**: Defines the repetition size, so the gradient repeats with a size of `--size` horizontally and vertically.

   This creates vertical lines spaced apart by the value of `--size`.

2. **Second Gradient**:

   ```css
   linear-gradient(var(--line) 1px, transparent 1px var(--size)) 50% 50% /
   var(--size) var(--size)
   ```

   - **`var(--line) 1px`**: A 1px wide line is colored using the `--line` custom property.
   - **`transparent 1px var(--size)`**: The transparent area after the line extends until the value of `--size`.
   - **`50% 50%`**: The background is positioned at the center.
   - **`/ var(--size) var(--size)`**: The gradient repeats both horizontally and vertically with the size defined by `--size`.

   This creates horizontal lines spaced apart by `--size`.

### Combined Effect

When these two gradients are layered together, one for vertical lines and one for horizontal lines, they form a grid pattern. The lines are spaced according to the value of the `--size` custom property, and the thickness/color of the lines is controlled by `--line`.

```css
body::before {
  --size: 45px;
  --line: color-mix(in lch, canvasText, transparent 70%);
  content: "";
  height: 100vh;
  width: 100vw;
  position: fixed;
  background:
    linear-gradient(90deg, var(--line) 1px, transparent 1px var(--size)) 50% 50% /
      var(--size) var(--size),
    linear-gradient(var(--line) 1px, transparent 1px var(--size)) 50% 50% /
      var(--size) var(--size);
  mask: linear-gradient(-20deg, transparent 50%, white);
  top: 0;
  transform-style: flat;
  pointer-events: none;
  z-index: -1;
}
```
