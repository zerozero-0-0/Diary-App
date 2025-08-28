import type { Route } from "./+types/home";
import { css } from "styled-system/css";
import { Month_Transion } from "~/components/Month_Transion";
import { Sidebar } from "~/components/sidebar";
import { Week_Calendar } from "~/components/Week_Calendar";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export function loader({ context }: Route.LoaderArgs) {
    return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function Home({ loaderData }: Route.ComponentProps) {
    return (
        <div>
            <Sidebar />
            <Month_Transion />
            <Week_Calendar />
        </div>
    )
}
