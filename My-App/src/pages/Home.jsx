function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>☕ Coffee R Us Admin Portal</h1>

      <p style={styles.paragraph}>
        Welcome to the Coffee R Us administrator dashboard — your central hub for
        managing everything related to our coffee inventory and product catalog.
      </p>

      <p style={styles.paragraph}>
        From here, you can efficiently add new coffee blends, update pricing,
        review and edit existing products, and keep track of stock levels in real
        time. This system is designed to make inventory management smooth,
        fast, and reliable for daily operations.
      </p>

      <p style={styles.paragraph}>
        Use the navigation above to explore different sections of the portal and
        ensure all coffee products are always up-to-date, accurately priced, and
        ready for customers.
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: "2rem",
    maxWidth: "800px",
    margin: "0 auto",
  },

  title: {
    fontSize: "2.2rem",
    marginBottom: "1rem",
  },

  paragraph: {
    fontSize: "1.2rem",
    lineHeight: "1.8",
    marginBottom: "1rem",
  },
};

export default Home;
export { Home };