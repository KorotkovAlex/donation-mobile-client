// _getUser() {
//   console.log(this.state);
//   // navigate('UserProfile');
//   console.log("Post");
//   fetch(`http://192.168.0.100:3000/getusers`, {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//     }
//   }).then((response) => {
//     console.log('response',  response._bodyInit);
//     this.state.users.push(response._bodyInit);
//     return this.state.users;
//   }).catch((error) => {
//     console.error(error);
//   });
// }

export const getUsers = payload => ({ type: 'GET_USERS', payload });
