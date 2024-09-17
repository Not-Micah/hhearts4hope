import { ClockLoader } from "react-spinners"

const Loader = () => {
  return (
    <div className="w-[100vw] h-[70vh]
    flex justify-center items-center">
        <ClockLoader color="#73a0e1" size={60} />
    </div>
  )
}

export default Loader