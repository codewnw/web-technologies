let browser = prompt("Enter you age(Chrome/Edge/Firefox):").toUpperCase()

switch (browser) {
    case "CHROME":
        console.log("Chrome uses V8 JavaScript engine.")
        break;
    case "EDGE":
        console.log("Edge uses CHAKRA JavaScript engine.")
        break;
    case "FIREFOX":
        console.log("Firefox uses SPIDERMONKEY JavaScript engine.")
        break;
    default:
        console.log("No information is available.")
}
