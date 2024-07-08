// authApi.js

// Simulated user data for authentication
// const users = [
//     { username: 'john_doe', password: 'password1', name: 'John Doe' },
//     { username: 'jane_smith', password: 'password2', name: 'Jane Smith' }
//   ];
  
//   export const login = (username, password) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const user = users.find(u => u.username === username && u.password === password);
//         if (user) {
//           resolve(user); // Resolve with user object if authentication succeeds
//         } else {
//           reject(new Error('Invalid username or password')); // Reject with error if authentication fails
//         }
//       }, 1000); // Simulate async API call with setTimeout
//     });
//   };
const users = [
    { id: 1, username: 'john_doe', password: 'password1', name: 'John Doe' },
    { id: 2, username: 'jane_smith', password: 'password2', name: 'Jane Smith' }
  ];
  
  export const login = (username, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
          // Mocking token generation with a simple string (JWT would typically be more complex)
          const token = `${user.id}.${username}.${Date.now()}`;
          resolve(token); // Resolve with token if authentication succeeds
        } else {
          reject(new Error('Invalid username or password')); // Reject with error if authentication fails
        }
      }, 1000); // Simulate async API call with setTimeout
    });
  };
  