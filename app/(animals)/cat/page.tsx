import axios from "axios"


async function getUserDetails() {
  try {
    const response = await axios.get("http://localhost:3000/api/user")
	  return response.data;
  }  catch(e) {
    console.log(e);
  }
}
const page = async () => {
    const user=await getUserDetails();

  return (
    <div  className="flex flex-col justify-center items-center pt-8 ">
    <div className="border-2 p-3 bordder-black bg-gray-900  text-white rounded-2xl shadow-xl text-4xl">

    {user.username} loves pussy
    <br />
    <img src={user.img_link} height={320} width={320}  alt="" />
    </div>
   </div>
  )
}

export default page