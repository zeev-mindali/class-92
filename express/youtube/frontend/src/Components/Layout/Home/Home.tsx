import "./Home.css";
import SingleItem from "./SingleItem/SingleItem";

function Home(): JSX.Element {
  //   const students = [
  //     "Daniel",
  //     "Matan",
  //     "Shahar #1",
  //     "Tzvi",
  //     "Elena",
  //     "Barak",
  //     "Daniel",
  //     "Avi",
  //     "Shir",
  //     "Iftat",
  //     "Lin",
  //     "Raze",
  //   ];

  const students = [
    {
      id: 1,
      name: "Daniel",
      age: 22,
      openToLove: false,
    },
    {
      id: 2,
      name: "Igal",
      age: 26,
      openToLove: false,
    },
    {
      id: 3,
      name: "Matan",
      age: 21,
      openToLove: false,
    },
    {
      id: 4,
      name: "Alon 1",
      age: 27,
      openToLove: true,
    },
    {
      id: 5,
      name: "Tzvi",
      age: 24,
      openToLove: true,
    },
    {
      id: 6,
      name: "shir",
      age: 34,
      openToLove: true,
    },
    {
      id: 7,
      name: "Elena",
      age: 30,
      openToLove: false,
    },
  ];

  const isFriday: boolean = true;
  const isLogged: boolean = true;
  return (
    <div className="Home">
      <h1>React Demo Day #1</h1>
      <hr />
      {students.map((item) => (
        <SingleItem
          id={item.id}
          name={item.name}
          age={item.age}
          openToLove={item.openToLove}
        />
      ))}
      <br />
      <br />
      <br />
      <div>{isFriday ? "fish and chips" : "Spagati with meat balls"}</div>
      <br />
      <br />
      <br />
      {isLogged && <div className="Box">Hello my master</div>}
    </div>
  );
}

export default Home;
