import { notFound } from "next/navigation";
import { ChapterDetail } from "@/components/chapter-detail";
import { chapters } from "@/data/source-data";

export function generateStaticParams() {
  return chapters.map((chapter: (typeof chapters)[number]) => ({
    id: chapter.id,
  }));
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const chapter = chapters.find((item: (typeof chapters)[number]) => item.id === id);

  if (!chapter) {
    notFound();
  }

  return <ChapterDetail chapter={chapter} />;
}
