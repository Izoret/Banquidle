document.addEventListener("turbo:submit-end", function (event) {
    event.target.reset()
    personInput.focus()
})