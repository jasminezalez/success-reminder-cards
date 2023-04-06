// import { readFileSync } from "fs";
// import { join } from "path";
// import Navbar from "../components/NavBar";

// const Chapters = ({ chapter, title, bulk, closing }) => {
//   return (
//     <div>
//         <Navbar />
//        <div id="card-container">
//         <div id="card-content">
//         <div id="card-content">
//         <h1>Chapter {chapter} </h1>
//         <p> {title} </p>
//         <p> {bulk} </p>
//         <p> {closing} </p>
//         </div>
//         </div>
//     </div> 
//     </div>
    
//   );
// };

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { chapter: "1" } },
//       { params: { chapter: "2" } },
//       { params: { chapter: "3" } },
//       { params: { chapter: "4" } },
//       { params: { chapter: "5" } },
//       { params: { chapter: "6" } },
//       { params: { chapter: "7" } },
//       { params: { chapter: "8" } },
//       { params: { chapter: "9" } },
//       { params: { chapter: "10" } },
//       { params: { chapter: "11" } },
//       { params: { chapter: "12" } },
//     ],
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const filePath = join(process.cwd(), "data", "chapters.json");
//   const fileContents = readFileSync(filePath, "utf8");
//   const data = JSON.parse(fileContents);

//   return {
//     props: {
//       chapterNumber: params.chapters,
//       chapter: data[params.chapters].title,
//       bulk: data[params.chapters].bulk,
//       closing: data[params.chapters].closing,
//     },
//   };
// }

// export default WeekPage;
