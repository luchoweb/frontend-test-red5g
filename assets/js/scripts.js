const showHideModal = () => {
  const modal = document.querySelector(".modal");

  if (modal.classList.contains("show")) {
    modal.classList.remove("show");
    return;
  }

  modal.classList.add("show");
};

const insertTableMockData = () => {
  const tbody = document.querySelector(".table-withdraw tbody");
  const mockData = `<tr>
    <td>00-00-0000 00:00:00</td>
    <td>00000000</td>
    <td>Cédula</td>
    <td>00000000</td>
    <td>$00.000.000</td>
  </tr>`;

  for (let index = 0; index < 20; index++) {
    tbody.innerHTML += mockData;
  }
}

$(function () {
  $(".input-date").datepicker({
    dateFormat: "dd-mm-yy",
  });

  insertTableMockData();
});
