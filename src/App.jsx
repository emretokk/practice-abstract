import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";
import { AiOutlineQuestionCircle } from "react-icons/ai";

function App() {
  return (
    <div className="App relative">
      <div
        id="sticky help button"
        className="w-[108px] h-[46px] bg-blue text-white fixed bottom-4 right-4 rounded-3xl flex items-center justify-center hover:cursor-pointer"
      >
        <AiOutlineQuestionCircle size={24} />
        <span className="font-bold ml-1">Help</span>
      </div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
