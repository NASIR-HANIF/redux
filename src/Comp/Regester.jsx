import { useSelector } from "react-redux"

const Regester = () => {
const response = useSelector(response => response)

  return (
    <>
        <h1>Regester component</h1>
        {response.message}
    </>
  )
}

export default Regester