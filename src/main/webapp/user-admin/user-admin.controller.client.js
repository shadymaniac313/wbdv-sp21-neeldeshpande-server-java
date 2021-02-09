let $theTableBody;
let $usernameFld;
let $pwdFld;
let $firstNameFld;
let $lastNameFld;
let $roleSelect;
let $createBtn;
let $deleteBtn;
let users = [];
// const self = this;
const userService = new UserServiceClient();

function addUser() {
  createUser({
    username: 'newuser',
    password: 'newpwd',
    firstname: 'new',
    lastname: 'user',
    role: 'fac'
  })
}

function createUser(user) {
  return userService.createUser(user).then(function (createdUser) {
    users.push(createdUser);
    renderUsers(users);
  })
}

function deleteUser(event) {
  let deleteBtn = $(event.target);
  let theClass = deleteBtn.attr("class");
  let theIndex = deleteBtn.attr("id");
  let theId = users[theIndex]._id;

  userService.deleteUser(theId).then(function (status) {
    users.splice(theIndex, 1);
    renderUsers(users)
  })
}

function renderUsers(users) {
  $theTableBody.empty();
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    $theTableBody.prepend(`
      <tr>
        <td>${user.username}</td>
        <td>${user.password}</td>
        <td>${user.firstname}</td>
        <td>${user.lastname}</td>
        <td>${user.role}</td>
        <td>
          <div class="row">
            <div class="col-6">
              <button class="fas fa-times wbdv-useradmin-delete-user" id="${i}"></button>
            </div>
            <div class="col">
              <button class="fas fa-pen" id="${user._id}"></button>
            </div>
          </div>
        </td>
    </tr>
    `)
  }
  $(".wbdv-useradmin-delete-user").click(deleteUser);
}

function init() {
  $usernameFld = $(".wbdv-useradmin-input-username");
  $pwdFld = $(".wbdv-useradmin-input-password");
  $firstNameFld = $(".wbdv-useradmin-input-firstname");
  $lastNameFld = $(".wbdv-useradmin-input-lastname");
  $roleSelect = $(".wbdv-useradmin-input-role");
  $theTableBody = jQuery("tbody");
  $createBtn = $(".wbdv-useradmin-create-btn");
  $deleteBtn = $(".wbdv-useradmin-delete-user");

  userService.fetchUsers().then(function (fetchedUsers) {
    users = fetchedUsers;
    renderUsers(users)
  });

  $createBtn.click(() => createUser({
    username: $usernameFld.val(),
    password: $pwdFld.val(),
    firstname: $firstNameFld.val(),
    lastname: $lastNameFld.val(),
    role: $roleSelect.val()
  }))


}

jQuery(init);