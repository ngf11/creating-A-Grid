function eventMouse() {
  const items = document.getElementsByClassName("item");

  for (let i = o; i < items.length; i++) {
    items[i].addEventListener("click", (e) => {
      console.log(2);
    });
  }
}
