import axios from 'axios';

const instacne = axios.create({
  baseURL: 'https://yalantis-react-school-api.yalantis.com/api/task0/users',
});

export const employeesAPI = {
  getEmployees() {
    return instacne.get();
  },
};
