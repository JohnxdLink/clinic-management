const FIND_BY_USERNAME = `
    SELECT
        a.id,
        a.username,
        a.password
    FROM accounts a
    WHERE a.username = ?
    LIMIT 1;
`;

module.exports = {
  FIND_BY_USERNAME,
};
