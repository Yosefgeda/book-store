/* eslint-disable */

const reciver = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZEAeqeXuXcX9bQfaMnAJ/books'
const getId = async () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(reciver, options);
    const result = await response.text();
    console.log(result)
  };
  getId();
  