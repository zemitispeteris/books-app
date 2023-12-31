import './style.scss';
import { Fragment } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookComponent from './Book';

const BooksPage = () => {
  const books = useLoaderData({ title: 'sasd' });
  return (
    <div className='books'>
      {books.map((book) => (
        <Fragment key={book._id}>
          <BookComponent {...book} />
        </Fragment>
      ))}
    </div>
  );
};

export default BooksPage;
