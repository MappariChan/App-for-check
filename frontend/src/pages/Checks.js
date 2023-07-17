import CheckList from "../components/CheckList/CheckList";

const checks = [
  { title: "Party", price: 20, desc: "This is for mty future" },
  { title: "Home", price: 20, desc: "This is for mty future" },
  { title: "Alco", price: 20, desc: "This is for mty future" },
  { title: "Restaurant", price: 20, desc: "This is for mty future" },
  { title: "DD", price: 20, desc: "This is for mty future" },
  { title: "Voleyball", price: 20, desc: "This is for mty future" },
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
