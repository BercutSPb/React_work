import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [first_name, setUsername] = useState('');
  const [useremail, setUseremail] = useState('');
  const [message, setMessage] = useState('');

// const baseUrl = "https://reqres.in/api/users?page=1"
//   axios.get(baseUrl).then((res) => {
//   console.log(res.data.data)
// })
  const checkUserExistence = async () => {
    try {
      // Send a GET request to check user existence
      const response = await axios.get(`https://reqres.in/api/users?page=1`);

      // If user exists, display a message
      if (response.data.exists) {
        setMessage('Пользователь с таким именем уже зарегестрирован');
      } else {
        // If user does not exist, proceed with registration
        await registerUser();
      }
    } catch (error) {
      console.error('Ошибка проверки существования пользователя:', error);
    }
  };

  const registerUser = async () => {
    try {
      // Send a POST request to register the user
      await axios.post('https://reqres.in/api/users?page=1', { first_name, useremail });

      // Display a success message
      setMessage('Регистрация прошла успешно!');
    } catch (error) {
      console.error('Ошибка при регистрации пользователя:', error);
    }
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    
    // Check user existence before registration
    await checkUserExistence();
  };

  return (
    <div>
      <form onSubmit={handleRegistration}>
        <label>
        Имя пользователя:
          <input
            type="text"
            value={first_name}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          почта:
          <input
          type='text'
          value={useremail}
          onChange={(e) => setUseremail(e.target.value)}/>
        </label>
        <button type="submit">Регистрация</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RegistrationForm;
