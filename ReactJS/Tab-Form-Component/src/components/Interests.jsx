const Interests = ({ data, setData, errors }) => {
  const { interests } = data;

  const handleDataChange = (e, name) => {
    setData((prevState) => ({
      ...prevState,
      interests: e.target.checked
        ? [...prevState.interests, e.target.name]
        : prevState.interests.filter((i) => i !== e.target.name),
    }));
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="Coding"
            checked={interests.includes("Coding")}
            onChange={handleDataChange}
          />
          Coding
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="Cooking"
            checked={interests.includes("Cooking")}
            onChange={handleDataChange}
          />
          Cooking
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="Music"
            checked={interests.includes("Music")}
            onChange={handleDataChange}
          />
          Music
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="Cinema"
            checked={interests.includes("Cinema")}
            onChange={handleDataChange}
          />
          Cinema
        </label>
      </div>
      {errors.interests && <span className="error">{errors.interests}</span>}
    </div>
  );
};

export default Interests;
