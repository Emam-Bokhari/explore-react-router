import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const userDetails=useLoaderData()
    console.log(userDetails)
    const {name,email,website}=userDetails
    return (
        <div className="border-2 border-orange-500 rounded-md my-10 p-6 text-center leading-6">
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{website}</p>
        </div>
    );
};

export default UserDetails;