function createLoginTracker(userInfo) {
  let attemptCount = 0;

  return (passwordAttempt) => {
    if (attemptCount >= 3) {
      return 'Account locked due to too many failed login attempts';
    }

    if (passwordAttempt === userInfo.password) {
      return 'Login successful';
    } else {
      attemptCount = attemptCount + 1;
      return `Attempt ${attemptCount}: Login failed`;
    }
  };
}

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
