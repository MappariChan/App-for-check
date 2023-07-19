import CheckList from "../components/CheckList/CheckList";

const checks = [
  {
    title: "Party",
    price: 20,
    desc: "This is for mty future",
    items: [
      { title: "Wine", price: 5, id: 0 },
      { title: "Cola", price: 5, id: 1 },
      { title: "Pizza", price: 5, id: 2 },
    ],
  },
  {
    title: "Home",
    price: 20,
    desc: "This is for mty future",
    items: [
      { title: "Wine", price: 5, id: 3 },
      { title: "Cola", price: 5, id: 4 },
      { title: "Pizza", price: 5, id: 5 },
    ],
  },
  {
    title: "Alco",
    price: 20,
    desc: "This is for mty future",
    items: [
      { title: "Wine", price: 5, id: 6 },
      { title: "Cola", price: 5, id: 7 },
      { title: "Pizza", price: 5, id: 8 },
    ],
  },
  {
    title: "Restaurant",
    price: 20,
    desc: "This is for mty future",
    items: [
      { title: "Wine", price: 5, id: 9 },
      { title: "Cola", price: 5, id: 10 },
      { title: "Pizza", price: 5, id: 11 },
    ],
  },
  {
    title: "DD",
    price: 20,
    desc: "This is for mty future",
    items: [
      { title: "Wine", price: 5, id: 12 },
      { title: "Cola", price: 5, id: 13 },
      { title: "Pizza", price: 5, id: 14 },
    ],
  },
  {
    title: "Voleyball",
    price: 20,
    desc: "This is for mty future",
    items: [
      { title: "Wine", price: 5, id: 15 },
      { title: "Cola", price: 5, id: 16 },
      { title: "Pizza", price: 5, id: 17 },
    ],
  },
];

const Checks = () => {
  return (
    <>
      <h1>Checks</h1>
      <CheckList checks={checks} />
    </>
  );
};

export default Checks;
