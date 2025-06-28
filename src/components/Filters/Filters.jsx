import style from "./Filters.module.css";
import Select from "react-select";
import { useState } from "react";

const initialSelected = {
  gender: null,
  qualification: null,
  universities: [],
  colleges: [],
  subjects: [],
};

function Filters({ lists, handleSave, handleResetCounsellors }) {
  const [selected, setSelected] = useState(initialSelected);

  function handleInputChange(label, e) {
    if (label === "gender" || label === "qualification") {
      setSelected((prev) => ({ ...prev, [label]: e ? e.value : e }));
    } else {
      //   console.log(e.value);
      const arr = e.map((v) => v.value);
      setSelected((prev) => ({ ...prev, [label]: arr }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSave(selected);
  }

  function handleReset(e) {
    e.preventDefault();
    setSelected(initialSelected);
    console.log(selected);
    handleResetCounsellors();
  }

  return (
    <div className={style.filters}>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <div className={style.container}>
          <div>
            <label htmlFor="gender">Gender</label>
            <Select
              isClearable
              options={[
                { label: "Male", value: "Male" },
                { label: "Female", value: "Female" },
              ]}
              onChange={(e) => handleInputChange("gender", e)}
              value={
                selected.gender && {
                  label: selected.gender,
                  value: selected.gender,
                }
              }
            />
          </div>
          <div>
            <label htmlFor="qualification">Highest qualification</label>
            <Select
              options={lists.education_levels.map((d) => ({
                label: d,
                value: d,
              }))}
              onChange={(e) => handleInputChange("qualification", e)}
              isClearable
              value={
                selected.qualification && {
                  label: selected.qualification,
                  value: selected.qualification,
                }
              }
            />
          </div>
          <div>
            <label htmlFor="institutes">Institutes</label>
            <Select
              options={lists.universities.map((d) => ({
                label: d,
                value: d,
              }))}
              isSearchable
              isMulti
              placeholder="Universities"
              onChange={(e) => handleInputChange("universities", e)}
              value={
                selected.universities.length &&
                selected.universities.map((u) => ({ label: u, value: u }))
              }
            />
            <Select
              options={lists.colleges.map((d) => ({
                label: d,
                value: d,
              }))}
              isSearchable
              isMulti
              placeholder="Colleges"
              onChange={(e) => handleInputChange("colleges", e)}
              value={
                selected.colleges.length &&
                selected.colleges.map((u) => ({ label: u, value: u }))
              }
            />
          </div>
          <div>
            <label htmlFor="subjects">Subjects</label>
            <Select
              isMulti
              isSearchable
              options={lists.expertise_subjects.map((d) => ({
                label: d,
                value: d,
              }))}
              onChange={(e) => handleInputChange("subjects", e)}
              value={
                selected.subjects.length &&
                selected.subjects.map((u) => ({ label: u, value: u }))
              }
            />
          </div>
          <div className={style.buttons}>
            <button type="submit">Save</button>
            <button type="reset">Reset</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Filters;
