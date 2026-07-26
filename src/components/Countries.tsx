interface CountriesProps {
  first: string;
  second: string;
  third: string;
}

export default function Countries({ first, second, third }: CountriesProps) {
  return (
    <div className="countries-container" style={{ marginTop: "2rem" }}>
      <h4>Countries Visited</h4>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
        <tbody>
          <tr style={{ borderBottom: "1px solid #ddd" }}>
            <td style={{ padding: "10px", textAlign: "center" }}>{first}</td>
          </tr>
          <tr style={{ borderBottom: "1px solid #ddd" }}>
            <td style={{ padding: "10px", textAlign: "center" }}>{second}</td>
          </tr>
          <tr>
            <td style={{ padding: "10px", textAlign: "center" }}>{third}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}