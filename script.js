var total = 0;

function actualizarTotal(checkbox) {
  var precio = parseInt(checkbox.getAttribute("data-precio"));

  if (checkbox.checked) {
    total += precio;
  } else {
    total -= precio;
  }
  
  document.getElementById("total").textContent = total;
}
