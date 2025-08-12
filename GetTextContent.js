function GetTextContent(node, include = false, filter = () => include) {
    let text = "";
    // If node matches filter and include is true, or doesn't match and include is false
    // if ((include && filter(node)) || (!include && !filter(node))) {
    if (include == filter(node)) { // this is more concise but less readable
        for (const child of node.childNodes) {
            if (child.nodeType === Node.TEXT_NODE) {
                node_text = child.nodeValue.trim();
                if (node_text.length > 0) {
                    text += node_text + " ";
                }
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

// console.log(GetTextContent(
//     document.querySelector("#A"),
//     false,
//     function(element) {
//         if (element.classList.contains("poop")) {
//             element.style.color = "red";
//             return true;
//         }
//         return false;
//     }
// ))