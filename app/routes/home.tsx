import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { css } from "styled-system/css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

// export function loader({ context }: Route.LoaderArgs) {
//   return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
// }

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div>
        <h1 className={css({ fontSize: "2xl", fontWeight: "bold"})}>
            Welcome to the home page
        </h1>
    </div>
  )
}
