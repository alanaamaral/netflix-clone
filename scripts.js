function accordionInit() {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((accordion) => {
    const text = accordion.querySelector(".btn-text")

    accordion.addEventListener("click", () => {
      const isOpen = accordion.classList.contains("open")

      accordions.forEach((accordion) => {
        accordion.classList.remove("open")

        accordion.querySelector(".btn-text").classList.add("hidden")
      })

      if (!isOpen) {
        accordion.classList.add("open")

        text.classList.remove("hidden")
      }
    })
  })
}

accordionInit()


