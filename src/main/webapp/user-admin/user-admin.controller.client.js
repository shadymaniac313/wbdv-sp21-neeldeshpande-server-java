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
        <td>
          <div class="row">
            <div class="col-6">
              <i class="fas fa-times"></i>
            </div>
            <div class="col">
              <i class="fas fa-pen"></i>
            </div>
          </div>
        </td>
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