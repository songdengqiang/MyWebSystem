export function hasClass(obj, cls) {
    return obj.classList.contains(cls)
}

export function addClass(obj, cls) {
    if (!hasClass(obj, cls)) { obj.classList.add(cls) }
}

export function removeClass(obj, cls) {
    if (hasClass(obj, cls)) {
        obj.classList.remove(cls)
    }
}

export function replaceClass(obj, old, cls) {
    obj.classList.replace(old, cls)
}

export function toggleClass(obj, cls) {
    obj.classList.toggle(cls)
}