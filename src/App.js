function PerScholasLogo() {
  return (
    <img
      src="https://perscholas.org/wp-content/themes/per-scholas/assets/images/logo1.svg"
      alt="Per Scholas"
      style={{
        display: "flex",
        margin: "1em auto"
      }}
    />
  );
}

export default function Gallery() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Per Scholas</h1>
      <PerScholasLogo />
      <PerScholasLogo />
      <PerScholasLogo />
      <p style={{ textAlign: "center" }}>React!</p>
    </>
  );
}
