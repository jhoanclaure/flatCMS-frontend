const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>NEW</h1>
    </header>
  );
};

const styles = {
  header: {
    textAlign: "center" as const,
    padding: "1rem 0",
    borderTop: "1px solid #000",
    borderBottom: "1px solid #000",
  },
  title: {
    fontSize: "2rem",
    letterSpacing: "2px",
  },
};

export default Header;