cy.request('GET', 'https://api.github.com/users/1).then(
  (response) => {
    expect(response.body).to.have.property('name', 'Michael');
    expect(response.body).to.have.property('id', 1825798);
	expect(response.body).to.have.property('company', null);
	expect(response.body).to.have.property('location', 'San Francisco, CA');
	expect(response.body).to.have.property('public_repos', 5);
	expect(response.body).to.have.property('public_gists', 9);
	expect(response.body).to.have.property('followers', 28);
	expect(response.body).to.have.property('following', 0);
  }
)
