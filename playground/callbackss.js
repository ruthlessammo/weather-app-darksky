const getUser = (id, callback) => {
  let user = {
    id: id,
    name: 'vitalki'
  };

  setTimeout(() => {
    callback(user);
  }, 3000);
}

getUser(31, (userObject) => {
  console.log(userObject);
});
