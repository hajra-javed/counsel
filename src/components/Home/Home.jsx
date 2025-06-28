// import background from "../../assets/background.jpg";
import style from "./Home.module.css";

function Home(props) {
  return (
    <div className={`${style.home} ${props.className}`}>
      <div className={style.text}>
        <p>
          Real People. Real Advice. For Students Who Want to Figure Things Out.
        </p>
        <p>
          At .l ,.<span>Counsel</span>, we believe students don’t need another
          lecture — they need someone who gets it. That’s why our platform
          connects you with real people who’ve been through it all:
          professionals working in different industries, entrepreneurs building
          their own paths, and individuals who’ve faced the same tough choices
          you might be dealing with now.
        </p>
        <p>
          Whether you’re confused about what to study, stressed about university
          applications, unsure how to manage your time, or just need to talk
          things through — we’re here for you. Our goal is to help students like
          you make smarter, more confident decisions about your education,
          career, and well-being.
        </p>
        <p>
          This isn’t traditional counselling. It’s honest, informal, and
          tailored guidance from people who understand where you’re coming from.
          No fluff, no jargon — just practical support at a reasonable cost, all
          online and at your pace.
        </p>
        <p>
          We’re not here to sell you dreams. We’re here to listen, share what
          we’ve learned, and help you take the next right step — whatever that
          looks like for you.
        </p>
      </div>
    </div>
  );
}

export default Home;
