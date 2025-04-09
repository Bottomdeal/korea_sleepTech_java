import React, { useState } from "react";

interface IFormData {
  id: string;
  password: string;
  email: string;
}

const initialFormData: IFormData = {
  id: "",
  password: "",
  email: "",
};

function UseState04() {
  const [formData, setFormData] = useState<IFormData>(initialFormData);

  const { id, password, email } = formData;

  const [errors, setErrors] = useState<IFormData>(initialFormData);

  const onSignUpInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const onSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let tempErrors = {
      id: '',
      password: '',
      email: ''
    };
  

  let isValid = true;

  if (!id) {
    tempErrors.id = '아이디를 입력해주세요.';
    isValid = false;
  }

  if (!password) {
    tempErrors.password = "비밀번호를 입력해주세요.";
    isValid = false;
  }

  if (!email) {
    tempErrors.email = '이메일을 입력해주세요.';
    isValid = false;
  }

  setErrors(tempErrors);

  if (isValid) {
    console.log('회원가입 데이터: ', formData);
    alert(`회원가입을 축하합니다. ${id}님`);

    setFormData(initialFormData);
  }
}

  return (
    <div
      style={{
        margin: "20px",
        padding: "20px",
        border: "1px solid #ddd",
        textAlign: "center",
      }}
    >
      <h3>회원가입</h3>
      <form onSubmit={onSignUpSubmit}>
        <div>
          <label>
            아이디
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={onSignUpInputChange}
            />
          </label>
          {errors.id && (<p style= {{ color: 'red' }}>{errors.id}</p>)}
        </div>
        <div>
          <label>
            비밀번호
            <input
              type="text"
              name="password"
              value={formData.password}
              onChange={onSignUpInputChange}
            />
          </label>
          {errors.password && (<p style= {{ color: 'red' }}>{errors.password}</p>)}
        </div>
        <div>
          <label>
            이메일
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={onSignUpInputChange}
            />
          </label>
          {errors.email && (<p style= {{ color: 'red' }}>{errors.email}</p>)}
        </div>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}

export default UseState04;
