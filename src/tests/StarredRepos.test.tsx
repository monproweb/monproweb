/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from '@testing-library/react';
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

  it('displays the repository names on hover', () => {
    const { getByTestId } = render(<StarredRepos username="ThomasErhel" />);
    const star = getByTestId('star');
    fireEvent.mouseEnter(star);
    expect(star).toHaveTextContent('Repository 1');
    fireEvent.mouseLeave(star);
    expect(star).not.toHaveTextContent('Repository 1');
  });

  it('animates the stars when not hovering', () => {
    const { getByTestId } = render(<StarredRepos username="ThomasErhel" />);
    const star = getByTestId('star');
    expect(star).toHaveStyle('animation: rotate 4s linear infinite');
  });

  it('stops animating the stars when hovering', () => {
    const { getByTestId } = render(<StarredRepos username="ThomasErhel" />);
    const star = getByTestId('star');
    fireEvent.mouseEnter(star);
    expect(star).toHaveStyle('animation: none');
    fireEvent.mouseLeave(star);
    expect(star).toHaveStyle('animation: rotate 4s linear infinite');
  });
});
