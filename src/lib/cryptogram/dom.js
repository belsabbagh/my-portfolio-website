
export function getALlInputs() {
    return document.querySelectorAll("input");
}

const FOCUS_RGBA = "rgba(255, 0, 0, 1)";

export function colorInput(input, name) {
    input.style.color = input.name === name ? FOCUS_RGBA : "white";
    input.style.borderBottom =
        input.name === name ? `1px solid ${FOCUS_RGBA}` : "1px solid white";
}

export function colorOthers(name) {
    getALlInputs().forEach((i) => colorInput(i, name));
}
