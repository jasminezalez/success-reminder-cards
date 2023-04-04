/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const HomePage = () => {
  const router = useRouter();
  const [selectedWeek, setSelectedWeek] = useState("1");

  useEffect(() => {
    const { week } = router.query;
    setSelectedWeek(week || "1");
  }, [router.query]);

  const handleChange = (event) => {
    const { value } = event.target;
    setSelectedWeek(value);
    router.push(`/${value}`);
  };

  return (
    <div>
      <select id="dropdown" value={selectedWeek} onChange={handleChange}>
        <option value="1">Navigate</option>
        <option value="1">Rule 1</option>
        <option value="2">Rule 2</option>
        <option value="3">Rule 3</option>
        <option value="4">Rule 4</option>
        <option value="5">Rule 5</option>
        <option value="6">Rule 6</option>
        <option value="7">Rule 7</option>
        <option value="8">Rule 8</option>
        <option value="9">Rule 9</option>
        <option value="10">Rule 10</option>
        <option value="11">Rule 11</option>
        <option value="12">Rule 12</option>
      </select>
      <div id="card-container">
        <div id="card-content">
          <h1 id="title">Twelve Simple Steps to Success</h1>
          <p>
            {" "}
            These cards are dedicated to you . . .<br></br>
            If you do not evade the challenge of personal growth.
            <br></br>
            If you recognize that you have unused potential or not fully
            developed ones.
            <br></br>
            If you accept that life is not stagnation, but a never ending
            learning process.
            <br></br>
            If you acknowledge that, to advance in life, you must have a desire
            to be greater than you are.
            <br></br>
            If you are convinced that you are unique and that every uniqueness
            has its own greatness.
            <br></br>
            If you believe that nothing is impossible for a willing mind and
            that to lose the winning spirit is to lose all.
            <br></br>
            If you are ready to take each day as it comes and then make in into
            the kind of day that you want it to be.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
