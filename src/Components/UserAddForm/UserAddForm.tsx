import { useState } from "react";
import styles from "./UserAddForm.module.css";
import { Person } from "../../static/data";

type UserAddFormProps = {
  addNewUser: (values: Person) => void;
};

const initialValues: Person = {
  id: 1000,
  first_name: "",
  last_name: "",
  email: "",
  age: 0,
  gender: "Male",
  job: "",
  country: "",
};

const UserAddForm = (props: UserAddFormProps) => {
  const { addNewUser } = props;
  const [values, setValues] = useState<Person>(initialValues);
  const [count, setCount] = useState<number>(1);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCount((previousValue) => previousValue + 1);
    setValues({
      ...values,
      id: 1000 + count,
    });
    addNewUser(values);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="first_name" className={styles.label}>
        First Name
      </label>
      <input
        type="text"
        id="first_name"
        name="first_name"
        className={styles.input}
        value={values.first_name}
        onChange={handleInputChange}
      />
      <label htmlFor="last_name" className={styles.label}>
        Last Name
      </label>
      <input
        type="text"
        id="last_name"
        name="last_name"
        className={styles.input}
        value={values.last_name}
        onChange={handleInputChange}
      />
      <label htmlFor="email" className={styles.label}>
        Email
      </label>
      <input
        type="text"
        id="email"
        name="email"
        className={styles.input}
        value={values.email}
        onChange={handleInputChange}
      />
      <label htmlFor="age" className={styles.label}>
        Age
      </label>
      <input
        type="number"
        id="age"
        name="age"
        className={styles.input}
        value={values.age}
        onChange={handleInputChange}
      />
      <label htmlFor="gender" className={styles.label}>
        Gender
      </label>
      <select
        name="gender"
        id="gender"
        className={styles.input}
        value={values.gender}
        onChange={handleInputChange}
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Non-binary">Non-binary</option>
        <option value="Genderqueer">Genderqueer</option>
        <option value="Polygender">Polygender</option>
        <option value="Bigender">Bigender</option>
        <option value="Agender">Agender</option>
      </select>
      <label htmlFor="job" className={styles.label}>
        Job
      </label>
      <input
        type="text"
        id="job"
        name="job"
        className={styles.input}
        value={values.job}
        onChange={handleInputChange}
      />
      <label htmlFor="country" className={styles.label}>
        Country
      </label>
      <input
        type="text"
        id="country"
        name="country"
        className={styles.input}
        value={values.country}
        onChange={handleInputChange}
      />
      <button type="submit" className={styles.button}>
        Add User
      </button>
    </form>
  );
};

export default UserAddForm;
