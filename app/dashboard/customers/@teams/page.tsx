import { wait } from "@/app/lib/utils";

export default async function Page() {
  await wait(5000);
  return <p>Teams Page</p>;
}
