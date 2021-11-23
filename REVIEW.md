# Notes
- I would suggest a different naming for `rects` variable and `rect`. I had to
    look into the HTML code to understand what they represent.
- This is super minor and I think it work too, but usually `increaser` is
    referred to as `counter`. EDIT: Oh now I understand what it does, it's a
    named constant which is supposed to represent by how much should the
    position of the rectangles increment. I would call it then something like
    `STEP_PX` to make it clear that it's a constant (at first I thought you
    track the position on axis x with it) and that it has to do with increasing
    or decreasing the position.
- The `startValue` could be named better, as it reflects current position with
    respect to axis x. Start value sounds like it's going to be set on start and
    won't change.
- Interesting and novel solution with animating position of just a single div
    which contains both rectangles. Very good!
- The `16` could be a named constant. It would make it easier to understand and
    easier to configure.
- Would be interesting to see a reload with resetting the values without page
    refresh, but page refresh is often safer solution, even though not very
    user-friendly.
- Clean CSS.

# Conclusion
It's amazing to just open the animation and see exactly what I wanted to see
without any changes! Maybe you know it, but I tried to give a task of 
[stepping feet illusion][wiki-stepping-feet]. I was truly happy to see it
working straight away.

<!-- Invisible List of References -->
[wiki-stepping-feet]: https://en.wikipedia.org/wiki/Stepping_Feet_Illusion