# CSS in JS Animations

This is an exploration how [CSS transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions), [keyframe animations](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes), [react-transition-group](reactcommunity.org/react-transition-group/) and motion frameworks like [react-spring](https://www.react-spring.io/) work together with different CSS-in-JS setups, compared to using "vanilla" CSS classes.

## Sample application

![things to do](things.gif)

The sample application is a todo list that animates adding, removing, modifying
and reordering items.

The application state logic can be found in the `shared` package and is re-used
across all UI implementations.

## Try it out

1. Clone this repo
2. Run `yarn`

### Vanilla example

Just using regular CSS classes in this example as a benchmark.

`yarn workspace vanilla start`

### Emotion example

This example uses the [Emotion](https://emotion.sh/) CSS-in-JS framework.

`yarn workspace emotion start`
