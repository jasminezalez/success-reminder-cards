import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const HomePage = () => {
  const router = useRouter();
  const [selectedWeek, setSelectedWeek] = useState('1');

  useEffect(() => {
    const { week } = router.query;
    setSelectedWeek(week || '1');
  }, [router.query]);

  const handleChange = (event) => {
    const { value } = event.target;
    setSelectedWeek(value);
    router.push(`/${value}`);
  };

  return (
    <div>
      <select id="dropdown" value={selectedWeek} onChange={handleChange}>
        <option value="1">Week 1</option>
        <option value="2">Week 2</option>
        <option value="3">Week 3</option>
        <option value="4">Week 4</option>
        <option value="5">Week 5</option>
        <option value="6">Week 6</option>
        <option value="7">Week 7</option>
        <option value="8">Week 8</option>
        <option value="9">Week 9</option>
        <option value="10">Week 10</option>
        <option value="11">Week 11</option>
        <option value="12">Week 12</option>
      </select>
    </div>
  );
};

export default HomePage;
