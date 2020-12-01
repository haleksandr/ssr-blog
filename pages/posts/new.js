import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import MainLayout from '../components/MainLayout';

export default function New() {
  const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
  `;

  const dispatch = useDispatch();

  const addPost = () => {
    alert('createNewPost');
  };

  return (
    <div>
      <MainLayout></MainLayout>
      <div>
        <p>title: </p>
        <input type="text" />
      </div>
      <div>
        <p>post text: </p>
        <textarea></textarea>
      </div>
      <div>
        <Button onClick={addPost}>New post</Button>
      </div>
      <div>123</div>
    </div>
  );
}
