function createLoginTracker(username, info) {
  const userInfo = {
    username: username,
    info: info
  };
  attemptCount = 0;
  return {
    passwordAttempt: () =>{
      announce = 'Login Successful';
      if (attemptCount < 3) {
        attemptCount++;
        announce = 'Login Failed';
      }
    }
}
}

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
