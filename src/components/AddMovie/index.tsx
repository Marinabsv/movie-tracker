import React, { useState } from 'react';
import { AddMovieProps, Movie } from '../../utils/types';
import styles from "./styles.module.scss";

const AddMovie: React.FC<AddMovieProps> = ({ onAddMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(0);
  const [status, setStatus] = useState<'watched' | 'watching' | 'to-watch'>('to-watch');
  const [coverFile, setCoverFile] = useState<File | null>(null); // Состояние для хранения обложки (файл)
  const [coverUrl, setCoverUrl] = useState(''); // Состояние для хранения обложки (URL)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newMovie: Movie = {
      id: Date.now(), // Уникальный ID на основе времени (можно улучшить)
      title,
      description,
      duration,
      status,
      cover: coverFile ? URL.createObjectURL(coverFile) : coverUrl // Используем URL объекта или ссылку
    };
    onAddMovie(newMovie);
    // Сбрасываем состояние формы
    setTitle('');
    setDescription('');
    setDuration(0);
    setStatus('to-watch');
    setCoverFile(null); // Сбрасываем обложку (файл)
    setCoverUrl(''); // Сбрасываем обложку (URL)
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input 
        className={styles.form__input} 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Название" 
        required 
      />
      <textarea 
        className={styles.form__textarea} 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Описание" 
        
      />
      <input 
        className={styles.form__input} 
        type="number" 
        value={duration} 
        onChange={(e) => setDuration(Number(e.target.value))} 
        placeholder="Продолжительность (мин)" 
        required 
      />
      <select 
        className={styles.form__select} 
        value={status} 
        onChange={(e) => setStatus(e.target.value as 'watched' | 'watching' | 'to-watch')}
      >
        <option value="to-watch">В планах</option>
        <option value="watching">В процессе</option>
        <option value="watched">Посмотрел</option>
      </select>
      
      {/* Поле для загрузки обложки из файла */}
      <input
        className={styles.form__input}
        type="file"
        accept="image/*" // Ограничиваем выбор только изображениями
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            setCoverFile(e.target.files[0]); // Сохраняем файл в состоянии
            setCoverUrl(''); // Очищаем URL при выборе файла
          }
        }}
      />
      
      {/* Поле для ввода ссылки на обложку */}
      <input
        className={styles.form__input}
        type="text"
        value={coverUrl}
        onChange={(e) => {
          setCoverUrl(e.target.value); // Сохраняем URL в состоянии
          setCoverFile(null); // Очищаем файл при вводе URL
        }}
        placeholder="Ссылка на обложку"
      />
      
      <button className={styles.form__button} type="submit">Добавить фильм</button>
    </form>
  );
};

export default AddMovie;