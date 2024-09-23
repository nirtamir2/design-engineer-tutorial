---
type: lesson
title: Implementing the background
focus: /App.css
---

# Preparing the background

Let's start with the background.

We use `body:before` to add a pseudo-element before the body.

We use `content:''`, and set height and width to `100vh` and `100vw` to fill the screen size.

We also set position `fixed` to make it fix and not move even when the user scrolls.

`top: 0;` - to keep position the fixed position at the top of the screen.

`z-index: -1;` - to be behind the content as background.

`pointer-events: none;` because it will not have any interactivity,
so we will improve performance a bit and not capture events.

`transform-style: flat;` [transform-style](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style) -
If flattened, the element's children will not exist on their own in the 3D-space.
Not sure why we need it.

By applying those CSS statements - you will have a fixed background that stretches fully