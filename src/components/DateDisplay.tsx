interface DateDisplayProps {
  date: string;
}

export default function DateDisplay({ date }: DateDisplayProps) {
  return (
    <div className="date-display">
      <h3>Today's Date: {date}</h3>
    </div>
  );
}