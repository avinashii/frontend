import { MdError } from "react-icons/md";

const NotFound = () => {
  return (
    <div className="continer not-found">
        <MdError />
        <h1>Page Not Found</h1>
    </div>
  )
};

export default NotFound;