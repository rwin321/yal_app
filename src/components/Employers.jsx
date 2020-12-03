import React from 'react';
import { employeesAPI } from '../axios';
import { useState, useEffect } from 'react';
import s from './Employees.module.css';

const Employers = () => {
  const [employees, setEmployees] = useState([]);
  /*
  const alphabet = (charA, charZ) => {
    const arr = [];
    let i = charA.charCodeAt(0);
    let j = charZ.charCodeAt(0);
    for (; i < j; ++i) {
      arr.push(String.fromCharCode(i));
    }
    console.log(arr);
    return alphabet;
  };
*/

  useEffect(() => {
    employeesAPI
      .getEmployees()
      .then((res) => {
        console.log(res);
        setEmployees(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ul className={s.container}>
        {employees.map((employee) => {
          return (
            <li key={employee.id}>
              {employee.lastName} {employee.firstName}
              <input type="checkbox" id="marked" checked="false" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Employers;
