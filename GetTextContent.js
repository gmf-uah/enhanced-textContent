function GetTextContent(node, include = false, filter = () => include) {
    let text = "";
    // If node matches filter and include is true, or doesn't match and include is false
    // if ((include && matchesFilter(node)) || (!include && !matchesFilter(node))) {
    if (include == filter(node)) { // this is more concise but less readable
        // console.log("test");
        for (const child of node.childNodes) {
            if (child.nodeType === Node.TEXT_NODE) {
                text += child.nodeValue + " ";
            }
        }
        for (const child of node.children) {
            text += GetTextContent(child, include, filter);
        }
    } else {
        return "";
    }
    return text;
}

// console.log(document.querySelector(".poop").textContent)
// console.log("bruh")
// console.log(document.querySelector("#A").childNodes)
// console.log(document.querySelector("h1"))
// for (const child of document.querySelector("#A").childNodes) {
//     if (child.nodeType === Node.TEXT_NODE) {
//         console.log(child.nodeValue);
//     }
// }

// TODO: loop through childNodes and get text nodes 

console.log(GetTextContent(
    document.querySelector("#A"),
    false,
    (el) => (el.classList.contains("poop"))
));