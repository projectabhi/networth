import Menu from "../components/Menu";
import { Button, Label, TextInput } from "flowbite-react";

const Login = () => {
  return (
    <>
      <Menu></Menu>
      <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <form>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email2">Your email</Label>
            </div>
            <TextInput
              id="email2"
              type="email"
              placeholder="name@flowbite.com"
              required
              shadow
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2">Your password</Label>
            </div>
            <TextInput id="password2" type="password" required shadow />
          </div>
          <div>
            <div className="mb-2 block">
              <Button type="submit">Login</Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
