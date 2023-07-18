import CheckList from "../components/CheckList/CheckList";

const checks = [
  {
    title: "Party",
    price: 20,
    desc: "This is for mty future",
    items: [
      { title: "Wine", price: 5 },
      { title: "Cola", price: 5 },
      { title: "Pizza", price: 5 },
    ],
  },
  {
    title: "Home",
    price: 20,
    desc: "This is for mty future",
    items: [
      { title: "Wine", price: 5 },
      { title: "Cola", price: 5 },
      { title: "Pizza", price: 5 },
    ],
  },
  {
    title: "Alco",
    price: 20,
    desc: "This is for mty future",
    items: [
      { title: "Wine", price: 5 },
      { title: "Cola", price: 5 },
      { title: "Pizza", price: 5 },
    ],
  },
  {
    title: "Restaurant",
    price: 20,
    desc: "This is for mty future",
    items: [
      { title: "Wine", price: 5 },
      { title: "Cola", price: 5 },
      { title: "Pizza", price: 5 },
    ],
  },
  {
    title: "DD",
    price: 20,
    desc: "This is for mty future",
    items: [
      { title: "Wine", price: 5 },
      { title: "Cola", price: 5 },
      { title: "Pizza", price: 5 },
    ],
  },
  {
    title: "Voleyball",
    price: 20,
    desc: "This is for mty future",
    items: [
      { title: "Wine", price: 5 },
      { title: "Cola", price: 5 },
      { title: "Pizza", price: 5 },
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
