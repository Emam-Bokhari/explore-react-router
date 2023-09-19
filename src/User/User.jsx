import { Link } from "react-router-dom";

const User = ({ data }) => {
    const {id, name, username, email } = data
    return (
        <div>
            <div className="border-2 border-gray-300 p-4">
               <div className="space-y-2">
               <h2>Name: {name}</h2>
                <p>UserName: {username}</p>
                <p>E-mail: {email}</p>
                <div className="text-center">
                <Link to={`/userDetails/${id}`}  >Show Details</Link>
                </div>
               </div>
            </div>
        </div>
    );
};

export default User;