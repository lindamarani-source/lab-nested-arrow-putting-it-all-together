function createLoginTracker(username, info) {
  const userInfo = {
    username: 'user1',
    password: 'password123',
   };

     const attemptCount = 0 < 3 ? attemptCount : 0;{
           if ( attemptCount > 3  ){return 'Account Locked'}
          }

   
     const passwordAttempt: () => {
      if (passwordAttempt === 'password123'); {
        return 'Login Successful'; attemptCount = 1;
      } 
      else if (passwordAttempt !== userInfo.password)   {
        return 'Login Failed'; attemptCount = attemptCount + 1; 
        else if (passwordAttempt !== userInfo.password) {
          return 'Login Failed';
        } 
      }
     }
  
};

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
