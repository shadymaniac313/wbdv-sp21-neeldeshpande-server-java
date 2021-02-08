function UserServiceClient() {
  this.fetchCourses = fetchUsers;
  var self = this;
  this.url = 'https://wbdv-generic-server.herokuapp.com/api/jannunzi/users';

  function fetchUsers() {
    return fetch(self.url).then(function (response) {
      return response.json()
    })
  }
}