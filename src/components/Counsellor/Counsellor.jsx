import style from "./Counsellor.module.css";

function Counsellor(props) {
  return (
    <div className={style.counsellor}>
      <div className={style.name}>
        <div>
          <h3>{props.name}</h3>
          <ul>
            <li>{props.gender}</li>
            {/* <li>Age: {props.age}</li> */}
          </ul>
        </div>
        <button>Book</button>
      </div>
      <div className={style.section}>
        <h3>Education</h3>
        <ul className={style.education}>
          {props.education.map((e, i) => {
            return (
              <li key={i}>
                <div className={style.university}>{e.university}</div>
                {e.status === "Ongoing" && (
                  <div className={style.status}>{e.status}</div>
                )}
                <div>{e.degree}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={style.section}>
        <h3>Employer</h3>
        <div className={!props.company && style.employer}>
          {props.company ? props.company : `Not employed`}
        </div>
      </div>

      <div className={style.section}>
        <h3>Subjects</h3>
        <ul className={style.subjects}>
          {props.expertise.map((e, i) => (
            <li className={style.subject} key={i}>
              {e}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Counsellor;
