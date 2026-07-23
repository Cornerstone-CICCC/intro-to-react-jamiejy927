import DateDisplay from "./components/DateDisplay";

export default function App() {
  const currentDate = new Date().toLocaleDateString();

  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <DateDisplay date={currentDate} />
    </main>
  );
}