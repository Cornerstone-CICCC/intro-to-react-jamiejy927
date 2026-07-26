import DateDisplay from "./components/DateDisplay";
import ProfileHeader from "./components/ProfileHeader";
import ProfileDetails from "./components/ProfileDetails";
import Countries from "./components/Countries";

export default function App() {
  const currentDate = new Date().toLocaleDateString();

  const userInfo = {
    name: "Jamie Yang",
    email: "jamie@gmail.com",
    gender: "female",
  };

  const countries = {
    first: "Hong Kong",
    second: "France",
    third: "Germany",
  };

  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
      <DateDisplay date={currentDate} />
      <ProfileHeader title={`${userInfo.name}'s Profile`} />
      <ProfileDetails 
        name={userInfo.name} 
        email={userInfo.email} 
        gender={userInfo.gender} 
      />
      <Countries
        first={countries.first}
        second={countries.second}
        third={countries.third}
      />
    </main>
  );
}