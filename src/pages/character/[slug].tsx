import { useRouter } from "next/router";

export default function CharacterPage() {
  const router = useRouter();
  return <h1>{JSON.stringify(router.query)}</h1>
}