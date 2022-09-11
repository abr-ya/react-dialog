import { useState } from "react";
import Button from "components/Button/Button";
import Dialog from "components/Dialog/Dialog";
import logo from "./logo.jpg";
import "./app.css";

const App = (): JSX.Element => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const closeHandler = () => {
    setIsDialogOpen(false);
  };

  const dialogContentRender = () => (
    <>
      <p>Do you want a</p>
      <h1>$20 CREDIT</h1>
      <p>for your first trade?</p>
    </>
  );

  const saveHandler = () => {
    console.log("Yes!");
  };

  return (
    <div className="app">
      <h1>Hello, React Dialog!</h1>
      <p>Простое приложение с Dialog-компонентом - TypeScript, StyledComponents (macro).</p>
      <Button onClick={() => setIsDialogOpen(true)}>Открыть диалог!</Button>
      <p>Кнопки:</p>
      <Button version="primary">Я - Primary кнопка</Button>
      <Button version="secondary">Я - Secondary кнопка</Button>
      <Button version="gray">Я - Gray кнопка</Button>
      <Dialog open={isDialogOpen} img={logo} onClose={closeHandler} onYes={saveHandler}>
        {dialogContentRender()}
      </Dialog>
    </div>
  );
};

export default App;
