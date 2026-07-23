interface ProfileHeaderProps {
  title: string;
}

export default function ProfileHeader({ title }: ProfileHeaderProps) {
  return (
    <div className="profile-header">
      <h2>{title}</h2>
    </div>
  );
}