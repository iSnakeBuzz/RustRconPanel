import React from 'react';
import Layout from "../components/Layout";
import { Container } from "@material-ui/core";
import AnimatedSwitch from "../components/App/AnimatedSwitch";

function App() {

  React.useEffect(() => {
    console.log("APP Started")
  }, []);

  return (
    <Layout>
      <Container maxWidth="xl">
        <AnimatedSwitch />
      </Container>
    </Layout>
  );
}

export default App;
