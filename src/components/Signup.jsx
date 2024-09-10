import React from 'react';
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

const Signup = () => {
  return (
    <Card>
    <CardHeader>
      <CardTitle>Signup</CardTitle>
      <CardDescription>
        Create a new account if you haven&apos;t already
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-2">
      <div className="space-y-1">
        <Input
          id="name"
          type="text"
          name="name"
          placeholder="Enter your name"
        />
        <Error message={'some error'} />              
      </div>
      <div className="space-y-1">
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <Error message={'some error'} />
      </div>
      <div className="space-y-1">
        <Input
          id="password"
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <Error message={'some error'} />
      </div>
      <div className="space-y-1">
        <Input
          id="file"
          type="file"
          name="avatar"
          placeholder="Enter your email"
        />
        <Error message={'some error'} />
      </div>
    </CardContent>
    <CardFooter>
      <Button className="w-full" >
      {false ? <PulseLoader color="#030712" size={10} /> : "Create Account"}
      </Button>
    </CardFooter>
  </Card>
  )
}

export default Signup