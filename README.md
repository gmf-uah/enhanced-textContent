# enhanced-textContent
Function that extends usage of the `textContent` property, giving blacklist/whitelist filter functionality to exclude undesired descendant text excerpts.

I made this because `node.textContent` automatically gathers all descendant text content, without the option to filter out anything.

Example usage can be found in dom-tree-example.html. Note how the word `dear` is excluded from the console's print, because the passed filter function finds the undesired class contained in that text node's element.

Some limitations:
- For any descendant that gets filtered, all of *its* descendants are automatically filtered as well. A `filterDescendants` boolean may fix this, but naming is confusing.
- Automatically adds a space between each non-empty text node.

These limitations are fine for the use case I created this module for. You are free to extend its functionality as you see fit.