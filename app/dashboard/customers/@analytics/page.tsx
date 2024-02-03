import { wait } from "@/app/lib/utils";

export default async function Page() {
  await wait(3000);
  return <p>Analytics Page</p>;
}
