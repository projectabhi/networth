import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router";
import Menu from "../components/Menu";
import "../custom.css";

export function Signup() {
  return (
    <>
    <Menu></Menu>
    <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
    <form className="form flex max-w-md flex-col gap-4">
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
          <Label htmlFor="repeat-password">Repeat password</Label>
        </div>
        <TextInput id="repeat-password" type="password" required shadow />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="agree" />
        <Label htmlFor="agree" className="flex">
          I agree with the&nbsp;
          <Link
            to="#"
            className="text-cyan-600 hover:underline dark:text-cyan-500"
          >
            terms and conditions
          </Link>
        </Label>
      </div>
      <Button type="submit">Register</Button>
    </form>
    </div>
    </>
  );
}
