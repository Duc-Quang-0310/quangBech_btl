module.exports = () => {
  const data = { users: [] };
  // Create 1000 users
  for (let i = 0; i < 20; i++) {
    data.users.push({ id: i, name: `user${i}` });
  }
  return data;
};
