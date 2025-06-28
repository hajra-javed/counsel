import style from "./Counsellors.module.css";
import Counsellor from "../Counsellor/Counsellor";
import { useState } from "react";
import data from "../../data.json";
import Filters from "../Filters/Filters";
import { useEffect } from "react";

function Counsellors(props) {
  const [counsellors, setCounsellors] = useState(data.counsellors);
  const [selected, setSelected] = useState({
    gender: null,
    qualification: null,
    universities: [],
    colleges: [],
    subjects: [],
  });

  function handleSave(data) {
    setSelected(data);
    console.log(data);
  }

  function handleResetCounsellors() {
    setCounsellors(data.counsellors);
  }

  function isSubset(sub, main) {
    return sub.every((item) => main.includes(item));
  }

  useEffect(() => {
    if (
      !selected.gender &&
      !selected.qualification === 0 &&
      selected.universities.length === 0 &&
      selected.colleges.length === 0 &&
      selected.subjects.length === 0
    ) {
      setCounsellors(data.counsellors);
      return;
    }
    let filtered = data.counsellors;
    if (selected.gender) {
      filtered = filtered.filter((c) => c.gender === selected.gender);
      // setCounsellors(filtered);
    }
    if (selected.qualification) {
      filtered = filtered.filter(
        (c) => c.highest_qualification === selected.qualification
      );
      // setCounsellors(filtered);
    }
    const institutes = [...selected.universities, ...selected.colleges];
    if (institutes.length) {
      filtered = filtered.filter((c) => {
        const c_universities = c.education.map((e) => e.university);
        if (isSubset(institutes, c_universities)) return true;
        return false;
      });
    }
    if (selected.subjects.length) {
      filtered = filtered.filter((c) => {
        if (isSubset(selected.subjects, c.expertise)) return true;
        return false;
      });
    }
    setCounsellors(filtered);
  }, [selected]);

  return (
    <div className={style.page}>
      <div className={style.container}>
        <div className={style.filters}>
          {Filters({ lists: data.lists, handleSave, handleResetCounsellors })}
        </div>
        <ul className={style.counsellors}>
          {counsellors.map((c, index) => {
            return <li key={index}>{Counsellor(c)}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Counsellors;
