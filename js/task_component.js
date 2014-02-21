var Task = (function () {

  // Task Constructor
  var idCounter = 0,
      id = function () {
        return "task_" + (idCounter += 1).toString(10);
      };

  // Task Instance
  return function (todo) {

      // Build DOM
      var task = {
            body: todo,
            id: id(),
            finished: false
          },
        render = function () {
          var source = $('#task-template').html(),
              template = Handlebars.compile(source);
          return template(task);
        },
        $task = $($.parseHTML(render())),
        $checkbox = $task.find("input[type=checkbox]"),
        $input = $task.find("input[type=text]"),
        $task_controls = $task.find(".task_controls"),
        $task_edit_controls =  $task.find(".task_edit_controls"),
        $btn_edit = $task.find(".btn_edit"),
        $btn_save = $task.find(".btn_save"),
        $btn_cancel = $task.find(".btn_cancel");

    // Attach Event Handlers

    // Edit Button
    $btn_edit.on("click", function () {
      $task_edit_controls.removeClass("hide");
      $btn_edit.addClass("hide");

      $input.attr("disabled", false).focus();
    });

    // Cancel Button
    $btn_cancel.on("click", function () {
      $task_edit_controls.addClass("hide");
      $btn_edit.removeClass("hide");

      $input.attr("disabled", true).val(task.body);
    });

    // Save Button
    $btn_save.on("click", function () {
      task.body = $input.val();

      $task_edit_controls.addClass("hide");
      $btn_edit.removeClass("hide");

      $input.attr("disabled", true).val(task.body);
    });

    // Checkbox
    $checkbox.on("change", function () {
      task.finished = $checkbox.prop("checked");
    });

    // Return Task Component
    return {
      finished: task.finished,
      render: $task
    };

  };

}());
