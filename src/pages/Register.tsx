import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/base/Button";

interface FormValues {
  name: string;
  birthday: string;
  gender: string;
}

const Register: React.FC = () => {
  const navigate = useNavigate();
  const userInfo = localStorage.getItem("userInfo");

  const [values, setValues] = useState<FormValues>({
    name: "",
    birthday: "",
    gender: "",
  });

  const [errors, setErrors] = useState<FormValues>({
    name: "",
    birthday: "",
    gender: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, birthday, gender } = values;
    let formErrors = {
      name: "",
      birthday: "",
      gender: "",
    };

    // Validate name
    if (!/^[a-zA-Z ]{4,50}$/.test(name)) {
      formErrors.name = "Tên phải có từ 4 đến 50 ký tự và không chứa số.";
    }

    // Validate birthday
    const today = new Date();
    const selectedDate = new Date(birthday);
    if (selectedDate >= today) {
      formErrors.birthday =
        "Ngày sinh không được là ngày hôm nay hoặc sau ngày hôm nay.";
    }

    // Validate gender
    if (!gender) {
      formErrors.gender = "Vui lòng chọn giới tính.";
    }

    setErrors(formErrors);

    // Submit form if no errors
    if (Object.values(formErrors).every((error) => error === "")) {
      // Do something with the form data, for example send it to server
      console.log("Form submitted:", values);
      localStorage.setItem("userInfo", JSON.stringify(values));
      navigate("/daily");
    }
  };
  useEffect(() => {
    if (userInfo) {
      navigate("/daily");
    }
  }, [userInfo, navigate]);

  return (
    <div className="container mx-auto p-4 bg-mystic-purple text-deep-black h-full">
      <h2 className="text-2xl font-bold mb-4 text-golden-yellow">
        Điền thông tin cá nhân
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block  font-bold text-golden-yellow">
            Tên:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <span className="text-red-500">{errors.name}</span>
        </div>
        <div>
          <label
            htmlFor="birthday"
            className="block font-bold text-golden-yellow"
          >
            Ngày sinh:
          </label>
          <input
            type="date"
            id="birthday"
            name="birthday"
            value={values.birthday}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <span className="text-red-500">{errors.birthday}</span>
        </div>
        <div>
          <label
            htmlFor="gender"
            className="block font-bold text-golden-yellow"
          >
            Giới tính:
          </label>
          <select
            id="gender"
            name="gender"
            value={values.gender}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Chọn giới tính</option>
            <option value="male">Nam</option>
            <option value="female">Nữ</option>
            <option value="other">Khác</option>
          </select>
          <span className="text-red-500">{errors.gender}</span>
        </div>
        <div>
          <Button className="rounded-md  focus:outline-none" type="submit">
            Lưu thông tin
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
