const WeekPage = ({ week }) => {
  return (
    <div>
      <h1>Week {week} Success Reminder Card</h1>
      <p> {title} </p>
      <p> {bulk} </p>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { week: '1', title: '', bulk: ''} },
      { params: { week: '2', title: '', bulk: ''} },
      { params: { week: '3', title: '', bulk: ''} },
      { params: { week: '4', title: '', bulk: ''} },
      { params: { week: '5', title: '', bulk: ''} },
      { params: { week: '6', title: '', bulk: ''} },
      { params: { week: '7', title: '', bulk: ''} },
      { params: { week: '8', title: '', bulk: ''} },
      { params: { week: '9', title: '', bulk: ''} },
      { params: { week: '10', title: '', bulk: ''} },
      { params: { week: '11', title: '', bulk: ''} },
      { params: { week: '12', title: '', bulk: ''} },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      week: params.week,
    },
  };
}

export default WeekPage;
