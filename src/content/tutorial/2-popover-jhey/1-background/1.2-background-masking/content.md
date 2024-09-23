---
type: lesson
title: Adding mask to the background
focus: /App.css
---

# Adding mask to the background

```css
mask: linear-gradient(-20deg, transparent 50%, white);
```

The CSS property `mask` is used to define which parts of an element are visible and which parts are hidden, similar to how a clipping mask works in image editing. The `linear-gradient` in the `mask` property is used to create a smooth transition between transparency and opacity.

Here’s a breakdown of the code `mask: linear-gradient(-20deg, transparent 50%, white);`:

### Components of the Mask:

1. **`linear-gradient(-20deg, ... )`**:
   - This defines a linear gradient at an angle of `-20 degrees`.
   - A negative degree value rotates the gradient counterclockwise.
   - The gradient line runs from top-right to bottom-left, because -20° rotates slightly to the left compared to 0°, which is from top to bottom.

2. **`transparent 50%`**:
   - This part of the gradient means that for the first 50% of the gradient's span, the color is fully transparent. In the context of the `mask` property, this means the first half of the element will be invisible.

3. **`white`**:
   - From 50% to 100% of the gradient, the color is white. In the context of the `mask` property, white represents full visibility (i.e., the element will be visible in this area).

### Result:
- The gradient starts at -20 degrees, with the first 50% of the gradient being fully transparent, so the corresponding half of the element will not be visible.
- The remaining part of the gradient (from 50% to 100%) will be white, meaning the element will gradually become fully visible in that part.
- This creates a diagonal masked area, where one part of the element is invisible and the other part is visible, with a soft transition between the two.

In effect, this creates a diagonal mask where part of the element fades from invisible to visible.