// var List = function (tasks) {

//   // Build DOM
//   var list = {
//         tasks: [],
//         finished: function (percent) {
//             var sum = 0, i = 0;
//             for (i; i < this.tasks.length; i += 1) {
//                 if (this.tasks[i].finished) {
//                     sum += 1;
//                 }
//             }
//             if (percent === "%") {
//                 return Math.floor((sum / this.total()) * 100);
//             } else {
//                 return sum;
//             }
//         },
//         unfinished: function (percent) {
//             if (percent === "%") {
//                 return Math.floor(((this.total() - this.finished()) / this.total()) * 100);
//             } else {
//                 return this.total() - this.finished();
//             }
//         },
//         total: function () {
//             return this.tasks.length;
//         }
//       },
//     render = function () {
//       var template = [
//         '<div class="main">',
//           '<h1>',
//             '<span class="underline">To-Do List<hr /></span>',
//           '</h1>',
//           '<div id="new_task_editor">',
//             '<form>',
//               '<input type="text" id="new_task" placeholder="Type here to add a new task." autofocus />',
//               '<input type="submit" />',
//             '</form>',
//           '</div>',
//           '<div class="list">',
//           '</div>',
//           '<div id="count">',
//             '<div class="done" style="width: ' + list.finished("%") + '%;" ><span id="done_count">' + list.finished() + '</span> done!</div>',
//             '<div class="undone" style="width: ' + list.unfinished("%") + '%;"><span id="undone_count">' + list.unfinished() + '</span> to go!</div>',
//           '</div>',
//           '<div id="remove_finished">',
//             'Remove finished tasks?',
//             '<button id="remove_finshed_tasks" class="btn btn_save">Yes!</button>',
//           '</div>',
//         '</div>'
//       ].join("");
//       return template;
//     },
//     $list = $($.parseHTML(render())),
//     $new_task_editor = $list.find("#new_task_editor").find("form"),
//     $remove_finshed_tasks = $list.find("#remove_finshed_tasks");

//     // Attach Event Handlers

//     /// New task sumbit
//     $("#new_task_editor").find("form").on("submit", function (event) {
//         event.preventDefault();

//         var $new_task = $(this).find("#new_task"),
//             task = new Task($new_task.val());

//         $(task.render).prependTo(".list");
//         $new_task.val("");
//     });


//     // Remove finished tasks
//     $("#remove_finshed_tasks").on("click", function () {
//       $("input:checked").parent().remove();
//     });

//     // Return Task Component
//     return {
//       finished: task.finished,
//       render: $task
//     };

// };

// New task sumbit
$("#new_task_editor").find("form").on("submit", function (event) {
    event.preventDefault();

    var $new_task = $(this).find("#new_task"),
        task = new Task($new_task.val());

    $(task.render).prependTo(".list");
    $new_task.val("");
});


// Remove finished tasks
$("#remove_finshed_tasks").on("click", function () {
  $("input:checked").parent().remove();
});
