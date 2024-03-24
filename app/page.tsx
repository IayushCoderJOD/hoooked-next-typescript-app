import Button from "./components/Button";

  export default async function Home() {
    return (<>
    <div>
    <div className="absolute z-50 font-extrabold text-6xl h-screen items-center w-screen flex flex-col justify-around">
      <div className="text-2xl flex pt-11"> 

      <Button label={"Signin"} route={"login"}  />    
      <Button label={"Signup"} route={"signup"} />  
      </div>
      <div className="h-screen pt-44 space-x-24">
      <span className="text-green-950 opacity-90 ">Animal</span>
      <span className="text-red-950 text-8xl opacity-90">Kindgom</span> 
      <span className="text-gray-900 opacity-90">Modinagar</span> 
      </div>
    </div>
    <div>
      <img className="opacity-80 w-screen h-screen" src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_webp,g_xy_center,h_500,q_75,w_1400,x_1500,y_740/v1/clients/orlandofl/2323_expedition_everest_5b7d2d82-5a64-4a70-9562-0a4a6204c3c5.jpg" alt="" />
    </div>
    </div>
    </>
    );
  }
