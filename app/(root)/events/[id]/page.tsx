import { getEventById } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";

export default async function page({ params: { id } }: SearchParamProps) {
  const event = await getEventById(id);
  return <div></div>;
}
