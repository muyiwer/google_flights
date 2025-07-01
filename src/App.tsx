import FlightSearchForm from "./components/FlightSearchForm";
import FlightResults from "./components/FlightResults";
import { Layout } from "./components/Layout";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

function App() {
  return (
    <Theme appearance="light">
      <Layout>
        <FlightSearchForm />
        <FlightResults />
      </Layout>
    </Theme>
  );
}

export default App;
