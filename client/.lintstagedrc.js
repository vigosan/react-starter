lint - stagedmodule.exports = {
  '*.+(js|jsx|ts|tsx)': ['eslint'],
  '**/*.+(js|json|css|scss|ts|tsx|md|graphql)': ['prettier --write', 'git add'],
};
