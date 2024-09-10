import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { useSearchParams } from "react-router-dom";
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

const Auth = () => {
  const [searchParams] = useSearchParams();
  return (
    <div className="mt-36 flex flex-col items-center gap-10">
      <h1 className="text-5xl font-extrabold">
        {" "}
        {searchParams.get("createNew")
          ? "Hold up! Let's login first.."
          : "Login/Signup"}
      </h1>
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Signup</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                to your account if you already have one
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Input
                  id="email"
                  defaultValue=""
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                />
              </div>
              <div className="space-y-1">
                <Input
                  id="password"
                  defaultValue=""
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" >
                {false ? <PulseLoader color="#030712" size={10} /> : "Login"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="signup">
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
              </div>
              <div className="space-y-1">
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="space-y-1">
                <Input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="space-y-1">
                <Input
                  id="file"
                  type="file"
                  name="avatar"
                  placeholder="Enter your email"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" >
              {false ? <PulseLoader color="#030712" size={10} /> : "Create Account"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Auth;
