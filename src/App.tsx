import DateDisplay from "./components/DateDisplay";
import ProfileHeader from "./components/ProfileHeader";

export default function App() {
  const currentDate = new Date().toLocaleDateString();

  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
      <DateDisplay date={currentDate} />
      <ProfileHeader title="Jamie Yang's Profile" />
    </main>
  );
}