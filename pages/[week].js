import { readFileSync } from "fs";
import { join } from "path";
import HomePage, { Dropdown } from "./index";

const WeekPage = ({ week, title, bulk, closing }) => {
  return (
    <div id="card-container">
        <Dropdown />
        <div id="card-content">
        <h1>Week {week} Success Reminder Card</h1>
        <p> {title} </p>
        <p> {bulk} </p>
        <p> {closing} </p>
        </div>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { week: "1" } },
      { params: { week: "2" } },
      { params: { week: "3" } },
      { params: { week: "4" } },
      { params: { week: "5" } },
      { params: { week: "6" } },
      { params: { week: "7" } },
      { params: { week: "8" } },
      { params: { week: "9" } },
      { params: { week: "10" } },
      { params: { week: "11" } },
      { params: { week: "12" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const filePath = join(process.cwd(), "data", "weeks.json");
  const fileContents = readFileSync(filePath, "utf8");
  const data = JSON.parse(fileContents);

  return {
    props: {
      week: params.week,
      title: data[params.week].title,
      bulk: data[params.week].bulk,
      closing: data[params.week].closing,
    },
  };
}

export default WeekPage;
