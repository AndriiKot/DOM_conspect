document.body.addEventListener("click", (event) => {    // !!! optimization
  if (event.target.className === "menu-button") {
    const el = event.target;
    if (activeBtn !== el) {
      if (activeBtn) {
        activeBtn.classList.remove("active"); // Удаляем класс у предыдущей кнопки !!! no optimization classList.remove
      }
      el.classList.add("active"); // Добавляем класс к нажимаемой кнопке     !!!  no
      activeBtn = el; // Обновляем активную кнопку
    }
  }
});
