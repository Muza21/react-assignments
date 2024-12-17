import styles from "./UserAddForm.module.css";

const UserAddForm = () => {
  return (
    <form className={styles.form}>
      <label htmlFor="first_name" className={styles.label}>
        First Name
      </label>
      <input type="text" id="first_name" className={styles.input} />
      <label htmlFor="last_name" className={styles.label}>
        Last Name
      </label>
      <input type="text" id="last_name" className={styles.input} />
      <label htmlFor="email" className={styles.label}>
        Email
      </label>
      <input type="text" id="email" className={styles.input} />
      <label htmlFor="age" className={styles.label}>
        Age
      </label>
      <input type="text" id="age" className={styles.input} />
      <label htmlFor="gender" className={styles.label}>
        Gender
      </label>
      <input type="text" id="gender" className={styles.input} />
      <label htmlFor="job" className={styles.label}>
        Job
      </label>
      <input type="text" id="job" className={styles.input} />
      <label htmlFor="country" className={styles.label}>
        Country
      </label>
      <input type="text" id="country" className={styles.input} />
      <button className={styles.button}>Add User</button>
    </form>
  );
};

export default UserAddForm;
