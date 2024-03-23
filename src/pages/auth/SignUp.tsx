import { useSignUpAuthMutation } from "@/app/features/authApiSlice";
import { signInWithGoogle } from "@/firebaseConfig";

import { setUser } from "@/app/features/userAuthSlice";
import { useAppDispatch } from "@/app/hooks";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOff } from "lucide-react";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email().min(1).max(50),
  password: z
    .string()
    .min(6, {
      message: "password must be at least of 6 characters",
    })
    .max(50),
});

interface SignUpProps {}

const SignUp: FC<SignUpProps> = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [UserMutation, { isLoading }] = useSignUpAuthMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithGoogle(); // Call signInWithGoogle function
      if (result) {
        const idToken = await result.user.getIdToken();
        const user = {
          displayName: result.user.displayName || "",
          email: result.user.email || "",
          idToken: idToken,
          kind: "",
          expiresId: "",
          localI: "",
          refreshToken: result.user.refreshToken,
        };

        localStorage.setItem("userDetails", JSON.stringify(user));
        dispatch(setUser(user));
        navigate("/");
        toast.success("Signed in with Google successfully!");
      } else {
        // Handle sign-in failure
        toast.error("Failed to sign in with Google.");
      }
    } catch (error) {
      // Handle errors
      console.error("Error signing in with Google:", error);
      toast.error("Failed to sign in with Google.");
    }
  };
  async function onSubmitHandler(values: z.infer<typeof formSchema>) {
    try {
      const res = await UserMutation({
        email: values.email,
        password: values.password,
        returnSecureToken: true,
      }).unwrap();

      toast.success("Login Successful");
      // console.log(res);
      localStorage.clear();
      localStorage.setItem("userDetails", JSON.stringify(res));
      dispatch(setUser(res));
      navigate("/");
    } catch (error) {
      toast.error("Sign In Failed");
      console.error(error);
    }
  }

  return (
    <div className="w-full flex justify-center items-center pt-16 gap-y-6 rounded-lg py-16">
      <div className=" flex flex-col  bg-background rounded-md p-8 md:w-[calc(50%)] w-full text-card-foreground space-y-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmitHandler)}
            className="space-y-8 "
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="username"
                      {...field}
                      autoFocus
                      className="h-12"
                    />
                  </FormControl>
                  <FormDescription>
                    Please provide your Email Id
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <>
                      <Input
                        placeholder="password"
                        {...field}
                        type="password"
                        autoComplete="off" // corrected from "false"
                        className="h-12"
                      />
                      <button
                        type="button"
                        className="absolute lg:top-1/2 transform -translate-y-1/2 right-2 top-1/3"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeIcon className="w-4 h-4" />
                        ) : (
                          <EyeOff className="w-4 h-4 " />
                        )}
                      </button>
                    </>
                  </FormControl>
                  <FormDescription>
                    Password must be at least of 6 characters, one Symbol, and a
                    number
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col gap-y-4">
              <Button
                type="submit"
                variant={"primaryGradient"}
                size={"lg"}
                disabled={isLoading}
              >
                {isLoading ? "Signing Up..." : "Sign Up"}
              </Button>
            </div>
          </form>
        </Form>
        <div className=" flex flex-col gap-y-4">
          <div className=" flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>

          <Button onClick={handleSignInWithGoogle} variant={"secondary"}>
            {" "}
            <img
              src="https://www.vectorlogo.zone/logos/google/google-icon.svg"
              className="w-5 h-5 mx-3"
            />{" "}
            Sign Up with Google
          </Button>
          <div className="w-full flex flex-row gap-x-2 mt-2">
            <Link to="/auth/login" className="text-sm">
              All ready have an account? Sign In
            </Link>
            <Link
              to="/auth/sign-up"
              className="text-sm ml-auto text-blue-500"
            ></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
