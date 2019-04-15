import axios from 'axios';

const HOST = 'https://test.act.today';

export const modifyData = async (columnOfData) => {
  axios.post(HOST, {input: columnOfData})
  .then(res => {
    console.log(res);
    console.log(res.data);
  })
}
