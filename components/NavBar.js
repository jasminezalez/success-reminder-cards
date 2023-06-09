// components/Navbar.js
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Navbar = () => {
  const router = useRouter();
  const [selectedWeek, setSelectedWeek] = useState("");

  useEffect(() => {
    const { week } = router.query;
    setSelectedWeek(week || "");
  }, [router.query]);

  const handleChange = (event) => {
    const { value } = event.target;
    setSelectedWeek(value);
    router.push(`/${value}`);
  };

  return (
    <select id="dropdown" value={selectedWeek} onChange={handleChange}>
      <option value="">Navigate</option>
      <option value="book">Textbook</option>
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
  );
};

export default Navbar
