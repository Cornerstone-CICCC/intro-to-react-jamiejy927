import girlImg from "../assets/girl.jpg";
import boyImg from "../assets/boy.jpg";

interface ProfileDetailsProps {
  name: string;
  email: string;
  gender: string;
}

export default function ProfileDetails({ name, email, gender }: ProfileDetailsProps) {
  const genderIcon = gender.toLowerCase() === "female" ? girlImg : boyImg;

  return (
    <div className="profile-details">
      <h4>Name: {name}</h4>
      <h4>Email: {email}</h4>
      <div className="gender-icon-container">
        <img src={genderIcon} alt={`${gender} icon`} width="300" height="300" />
      </div>
    </div>
  );
}