import { TimerIcon } from "lucide-react";
import { Heading } from "./components/Heading";

import "./styles/global.css";
import "./styles/theme.css";

function App() {
  return (
    <>
      <Heading>
        Hello World

        <button>
          <TimerIcon />
        </button>

        </Heading>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis,
        praesentium illum eos labore corrupti tempora voluptatum laborum rem
        quisquam eum, quas hic quam dicta repellat molestias ea quo adipisci
        voluptatem!
      </p>
    </>
  );
}

export default App;
