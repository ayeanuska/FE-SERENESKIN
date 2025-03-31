import react from "react"
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";


function App() {
 toast.success("hello world");

  return (
    <>
    <Button> click me </Button>
      <h1>hello world</h1>
    </>
  )
}

export default App
