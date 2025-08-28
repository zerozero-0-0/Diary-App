import type { Route } from "./+types/home";
import { css } from "styled-system/css";
import { Button } from "~/utils/Button";
import { Month_Transion } from "~/components/Month_Transion";
import { Sidebar } from "~/components/sidebar";

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
            <Button>
                追加
            </Button>
        </div>
    )
}
