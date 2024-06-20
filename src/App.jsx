import Brand from "./components/Brand";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-[url('/Images/wh1.png')] bg-no-repeat min-h-screen flex flex-col justify-between rounded-xl shadow-2xl mx-28 my-6">
      <Navbar />
      <Brand />
      <Footer />
    </div>
  );
}

export default App;
