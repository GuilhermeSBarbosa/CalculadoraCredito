function dragAndSave(id) {
  // mobile devices have trouble to drag.
  if (screen.width <= 800) return;

  // get positions in localStorage
  var positions = JSON.parse(localStorage.positions || "{}");

  if (positions[id]) $(id).css(positions[id]);

  // save the position of the draggable element into localStorage
  $(id).draggable({
    scroll: true, 
    stop: function (event, ui) {
      let positions = JSON.parse(localStorage.positions || "{}");
      positions[id] = ui.position; 
      localStorage.positions = JSON.stringify(positions);
    },
  });
}
