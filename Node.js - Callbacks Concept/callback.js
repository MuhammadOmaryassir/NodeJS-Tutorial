const users = ['ahmed', 'muhammad', 'Muhannad']

const addUser = function (userName, callback) {
  setTimeout(function () {
    users.push(userName)
    callback()
  }, 200)
}

const getUsers = function () {
  setTimeout(function () {
    console.log(users)
  }, 100)
}

addUser('Omar', getUsers)
