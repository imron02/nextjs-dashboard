import { wait } from "@/app/lib/utils";

export default async function Page() {
  await wait(2000);
  return <p>Customers Page</p>;
}
