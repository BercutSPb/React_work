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
const checkUserExistence = async (userName, userEmail) => {
  try {
    
    const response = await axios.get(`https://reqres.in/api/users?page=1`);

    
    const userList = response.data.data;
    const userIndex = userList.findIndex(user => user.first_name === userName || user.email === userEmail);

    if (userIndex !== -1) {
      
      setMessage('Пользователь с таким именем или email уже зарегистрирован');
      console.log(response.data.data);
    } else {
      
      const registerUser = async () => {
        try {
          
          await axios.post('https://reqres.in/api/users?page=1', { first_name, useremail });
    
          setMessage('Регистрация прошла успешно!');
          

        } catch (error) {
          console.error('Ошибка при регистрации пользователя:', error);
        }
      };
      registerUser();
    }
  } catch (error) {
    console.error('Ошибка проверки существования пользователя:', error);
  }
};

  

  const handleRegistration = async (e) => {
    e.preventDefault();
    
    
    await checkUserExistence(first_name, useremail);
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
            id="username-input"
          />
        </label>
        <label>
          почта:
          <input
          type='text'
          value={useremail}
          onChange={(e) => setUseremail(e.target.value)}
          id="email-input"
          />
        </label>
        <button type="submit">Регистрация</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RegistrationForm;
