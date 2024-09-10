import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PulseLoader } from "react-spinners";
import { Error } from "@/components";
import * as yup from 'yup';
import useFetch from "@/hooks/useFetch";
import { login } from "@/db/apiAuth";

const Login = () => {

    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        email : "",
        password : ""
    })

    const handleInputChange = (e)=>{
        const {name,value} = e.target;
        setFormData((prevFormData)=>{
            return {
                ...prevFormData,
                [name] : value
            }
        })
    }

    const handleLogin = async() => {
      setErrors({});
      try {
        const schema = yup.object().shape({
          email: yup
            .string()
            .email("Invalid Email")
            .required("Email is required"),
          password: yup
            .string()
            .min(6, "Password must be atleast 6 characters")
            .required("Password is required"),
        });

        await schema.validate(formData,{abortEarly : false});
        // Api calling

        // useFetch(login, formData)


      } catch (error) {
        
        const newErrors = {}

        error?.inner?.forEach((err)=>{
            newErrors[err.path] = err.message;
        })

        setErrors(newErrors);

      }
    };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          to your account if you already have one
        </CardDescription>
        <Error message={"some error"} />
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Input
            id="email"
            defaultValue=""
            type="email"
            placeholder="Enter Email"
            name="email"
            onChange={handleInputChange}
          />
          {errors.email && <Error message={errors.email} />}
        </div>
        <div className="space-y-1">
          <Input
            id="password"
            defaultValue=""
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={handleInputChange}
          />
          {errors.password && <Error message={errors.password} />}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick = {handleLogin} >
          {false ? <PulseLoader color="#030712" size={10} /> : "Login"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Login;
