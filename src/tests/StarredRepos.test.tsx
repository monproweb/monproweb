/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';
import StarredRepos from 'components/StarredRepos';

describe('StarredRepos', () => {
  it('renders the correct number of stars', () => {
    const { getAllByTestId } = render(<StarredRepos username="ThomasErhel" />);
    const stars = getAllByTestId('star');
    expect(stars).toHaveLength(3); // Assumes that the user has starred 3 repositories
  });

  it('fetches the correct list of starred repositories', async () => {
    const { findByText } = render(<StarredRepos username="ThomasErhel" />);
    const repo1 = await findByText('Repository 1');
    const repo2 = await findByText('Repository 2');
    const repo3 = await findByText('Repository 3');
    expect(repo1).toBeInTheDocument();
    expect(repo2).toBeInTheDocument();
    expect(repo3).toBeInTheDocument();
  });
});
