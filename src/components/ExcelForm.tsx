import {useState} from 'react';

const ExcelForm = ({onSubmit}) => {
  const [formData, setFormData] = useState({
    name:'',
    email:''
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name='name'
        placeholder='名前'
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type='email'
        name='email'
        placeholder='メールアドレス'
        value={formData.email}
        onChange={handleChange}
      />
      <button type="submit">Excelファイルを出力</button>
    </form>
  );
};

export default ExcelForm;