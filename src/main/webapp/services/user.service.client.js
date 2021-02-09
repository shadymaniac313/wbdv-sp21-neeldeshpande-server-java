function UserServiceClient() {
  this.findAllUsers = findAllUsers;
  this.findUserById = findUserById;
  this.createUser = createUser;
  this.deleteUser = deleteUser;
  this.updateUser = updateUser;

  const self = this;
  this.url = 'https://wbdv-generic-server.herokuapp.com/api/001327792/users';

  function createUser(user) {
    return fetch(self.url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(function (response) {
      return response.json()
    })
  }

  function deleteUser(id) {
    return fetch(`${self.url}/${id}`, {
      method: 'DELETE'
    })
  }

  function updateUser(userId, user) {
    return fetch(`${self.url}/${userId}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(function (updatedUser) {
      return updatedUser.json();
    })
  }

  function findAllUsers() {
    return fetch(self.url).then(function (response) {
      return response.json()
    })
  }

  function findUserById(userId) {
    return fetch(`${self.url}/${userId}`).then(
        fetchedUser => fetchedUser.json());
  }
}