window.onload = function() {
$(":checkbox").click(function() {
  if ($(this).is(":checked")) {
    $(this).closest("tr").find("label").css("text-decoration-line", "line-through");
  } else {
    $(this).closest("tr").find("label").css("text-decoration-line", "none");
  }
});

let f = $('input[name="commit"]');
f.click(function() {
  if ($('input[name="todo_list[title]"]')[0].checkValidity() === false) {
    f.addClass('is-invalid');
  }
});
}