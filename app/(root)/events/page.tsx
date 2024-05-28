import Collection from "@/components/shared/Collection";
import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";

export default async function page({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const category = (searchParams?.category as string) || "";
  const events = await getAllEvents({
    query: searchText,
    limit: 6,
    page: page,
    category: category,
  });
  return (
    <div className="wrapper my-8 flex flex-col gap-8 md:gap-12">
      <Collection
        data={events?.data}
        emptyTitle="No events found"
        emptyStateSubtext="Check back later for more events!"
        collectionType="All_Events"
        limit={6}
        page={page}
        totalPages={events?.totalPages}
      />
    </div>
  );
}
