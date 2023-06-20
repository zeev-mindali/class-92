import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { SimpleModal } from "../Modals/SimpleModel";
import { useForm } from "react-hook-form";

axios
  .VERB("url") //=>VERB (POST,GET,PUT,DELETE)
  .then((response) => {
    //what to do with response
  })
  .catch((error) => {
    //what to do with error
  });

//will render each time test will be change
const [test, setTest] = useState(false);

//will run the commands only one time
useEffect(() => {}, [])//moving to other pages
<NavLink>;

//moving to other pages within the code....
const navigate = useNavigate();
navigate("/");

//to get parameters from url (GET)
//url    => http://localhost/check/data
//routes => route="/check/:data"
const params = useParams();
let testParams = params.data;

//useForm => https://react-hook-form.com/

//export our functions
const { register, handleSubmit , formState: { errors } } = useForm();

//create the send arrow function
const send = async (data: SimpleModal) => {
  console.log(data);
};


//html component side
<form onSubmit={handleSubmit(send)}>
    <input type="text" {...register("msg"),{ required: true }}
    {errors.msg && <span>This field is required</span>}
</form>
