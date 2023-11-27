import BarChart from "./BarChart";
import Header from "./Header";

function App({ data }) {
  return (
    <div style={{ textAlign: "center" }}>
      <Header />
      <div style={{ padding: "0px 30px" }}>
        <BarChart data={data} />
      </div>
    </div>
  );
}

export default App;
