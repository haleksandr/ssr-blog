import Link from 'next/link';
import styled from 'styled-components';

export default function MainLayout() {
  const Navigation = styled.nav`
    width: 100%;
    background-color: gray;
    padding: 15px 20px;
  `;

  return (
    <Navigation>
      <Link href={'/'}>
        <a>Home</a>
      </Link>
      <br />
      <Link href={'/posts/new'}>
        <a>Create new post</a>
      </Link>
    </Navigation>
  );
}
