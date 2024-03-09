const showHideModal = () => {
  const modal = document.querySelector(".modal");

  if(modal.classList.contains("show")) {
    modal.classList.remove("show");
    return;
  }

  modal.classList.add("show");
}
