import React, { useState } from 'react';
import { TextField } from '../TextField';
import { Movie } from '../../types/Movie';

type Props = {
  onAdd: (movie: Movie) => void;
};

export const NewMovie: React.FC<Props> = ({ onAdd }) => {
  // Increase the count after successful form submission
  // to reset touched status of all the `Field's

  const [count, setCount] = useState(0);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [imdbUrl, setImdbUrl] = useState('');
  const [imdbId, setImdbId] = useState('');

  const handleTitleChange = (newValue: string) => {
    setTitle(newValue);
  };

  const handleDescriptionChange = (newValue: string) => {
    setDescription(newValue);
  };

  const handleImgUrlChange = (newValue: string) => {
    setImgUrl(newValue);
  };

  const handleImdbUrlChange = (newValue: string) => {
    setImdbUrl(newValue);
  };

  const handleImdbIdChange = (newValue: string) => {
    setImdbId(newValue);
  };

  const isFormValid: boolean =
    title.trim() !== '' &&
    imgUrl.trim() !== '' &&
    imdbUrl.trim() !== '' &&
    imdbId.trim() !== '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const movie: Movie = {
      title,
      description,
      imgUrl,
      imdbUrl,
      imdbId,
    };

    onAdd(movie);

    setTitle('');
    setDescription('');
    setImgUrl('');
    setImdbUrl('');
    setImdbId('');

    setCount(prev => prev + 1);
  };

  return (
    <form className="NewMovie" key={count} onSubmit={handleSubmit}>
      <h2 className="title">Add a movie</h2>

      <TextField
        name="title"
        label="Title"
        value={title}
        onChange={handleTitleChange}
        required={true}
      />

      <TextField
        name="description"
        label="Description"
        value={description}
        onChange={handleDescriptionChange}
      />

      <TextField
        name="imgUrl"
        label="Image URL"
        value={imgUrl}
        onChange={handleImgUrlChange}
        required={true}
      />

      <TextField
        name="imdbUrl"
        label="Imdb URL"
        value={imdbUrl}
        onChange={handleImdbUrlChange}
        required={true}
      />

      <TextField
        name="imdbId"
        label="Imdb ID"
        value={imdbId}
        onChange={handleImdbIdChange}
        required={true}
      />

      <div className="field is-grouped">
        <div className="control">
          <button
            type="submit"
            data-cy="submit-button"
            className="button is-link"
            disabled={!isFormValid}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
