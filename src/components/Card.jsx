import { useEffect, useState } from "react";
import dividerDeskTop from "../assets/images/pattern-divider-desktop.svg";
import dice from "../assets/images/icon-dice.svg";

const url = "https://api.adviceslip.com/advice";

export default function Card() {
  const [slip, setSlip] = useState({});

  async function getAdvice() {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data.slip);
    setSlip(data.slip);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <section className="card">
      <div className="container">
        <h1>ADVICE #{slip.id}</h1>
        <p>{`“${slip.advice}”`}</p>
        <img src={dividerDeskTop} alt="divider image" className="divider" />
        <button onClick={getAdvice}>
          <img src={dice} alt="dice" />
        </button>
      </div>
    </section>
  );
}
