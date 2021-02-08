var $theTableBody;
var userService = new UserServiceClient();

function renderUsers(users) {
  $theTableBody.empty();
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    $theTableBody.prepend(`
      <tr>
        <td>${user.username}</td>
        <td>${user.username}</td>
        <td>${user.username}</td>
        <td>${user.username}</td>
        <td>${user.username}</td>
    </tr>
    `)
  }
  userService.fetchCourses().then(function (value) {
    console.log(value)
  })
}

function init() {
  $theTableBody = jQuery("tbody");
  userService.fetchCourses().then(function (users) {
    renderUsers(users)
  })
}

jQuery(init);