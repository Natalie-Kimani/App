function Home() {
  return (
    <div style={styles.container}>
      <h1>☕ Coffee R Us Admin Portal</h1>

      <p>
        Welcome to the Coffee R Us administrator dashboard.
      </p>

      <p>
        Manage products, update pricing, search inventory,
        and add new coffee blends.
      </p>
    </div>
  )
}

const styles = {
  container: {
    padding: '2rem',
  },
}

export { Home }
export default Home