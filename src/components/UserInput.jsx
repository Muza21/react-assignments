function UserInput({ id, choice, handleChange, title }) {
  return (
    <div className="input_container">
      <label htmlFor={id}>
        <img src={`./${id}.png`} alt={id} width="100px" height="100px" />
        <p>{title}</p>
      </label>
      <input
        type="radio"
        name="rock-paper-scissors"
        id={id}
        checked={choice === id}
        onChange={handleChange}
      />
    </div>
  );
}

export default UserInput;
