import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";

// Инициализация Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBYnUxB22HRNRjoDUr3YyEyFpoi_JpJyso",
    authDomain: "pinocchio-83814.firebaseapp.com",
    projectId: "pinocchio-83814",
    storageBucket: "pinocchio-83814.appspot.com",
    messagingSenderId: "647403894054",
    appId: "1:647403894054:web:cdafdd6dbeb19bc3407de7",
    measurementId: "G-B1GDPZQ745"
};

firebase.initializeApp(firebaseConfig);

export default function PhoneAuth() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [user, setUser] = useState(null);

  // Функция для отправки кода подтверждения на номер телефона
  const sendVerificationCode = () => {
    const appVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container");

    // Отправка кода подтверждения на номер телефона пользователя
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // Код подтверждения успешно отправлен
        setVerificationId(confirmationResult.verificationId);
      })
      .catch((error) => {
        // Произошла ошибка при отправке кода подтверждения
        console.error(error);
      });
  };

  // Функция для подтверждения кода подтверждения и авторизации пользователя
  const signInWithPhoneNumber = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, verificationCode);

    // Авторизация пользователя
    firebase.auth().signInWithCredential(credential)
      .then((result) => {
        // Пользователь успешно авторизован
        setUser(result.user);
      })
      .catch((error) => {
        // Произошла ошибка при авторизации пользователя
        console.error(error);
      });
  };

  // Функция для регистрации нового пользователя
  const signUp = () => {
    const appVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container");

    // Регистрация нового пользователя
    firebase.auth().createUserWithEmailAndPassword(phoneNumber, appVerifier)
      .then((result) => {
        // Пользователь успешно зарегистрирован
        setUser(result.user);
      })
      .catch((error) => {
        // Произошла ошибка при регистрации пользователя
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Phone Authentication</h1>
      <div>
        <label>Phone Number:</label>
        <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      </div>
      <div id="recaptcha-container"></div>
      <div>
        <button onClick={sendVerificationCode}>Send Verification Code</button>
      </div>
      <div>
        <label>Verification Code:</label>
        <input type="text" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} />
      </div>
      <div>
        <button onClick={signInWithPhoneNumber}>Sign In</button>
      </div>
      <div>
        <button onClick={signUp}>Sign Up</button>
      </div>
      {user && <div>Logged in as {user.phoneNumber}</div>}
    </div>
  );
}