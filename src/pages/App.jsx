import React from 'react';
import Layout from "../components/Layout";
import { Container } from "@material-ui/core";
import AnimatedSwitch from "../components/App/AnimatedSwitch";
import ServersContext from '../components/contexts/ServersContext';

const electron = window.require("electron")
const { ipcRenderer } = electron;

function App() {

  const [servers, setServers] = React.useState({
    data: localStorage.getItem('servers') ? localStorage.getItem('servers') : undefined,
    setData: (data) => setServers({ ...servers, data })
  });

  React.useEffect(() => {
    console.log("APP Started");

    ipcRenderer.on('update_servers', (e, arg) => {
      console.log("Updating servers")
      setServers({ ...servers, data: localStorage.getItem('servers') ? localStorage.getItem('servers') : undefined });
    });
    
  }, []);

  return (
    <ServersContext.Provider value={servers}>
      <Layout>
        <Container maxWidth="xl">
          <AnimatedSwitch />
        </Container>
      </Layout>
    </ServersContext.Provider>
  );
}

export default App;
