interface VideoSectionProps {
  link: string;
}

export default function VideoSection({ link }: VideoSectionProps) {
  const embeddedLink = link.replace("watch?v=", "embed/");

  return (
    <div className="flex flex-col gap-5 rounded-md border border-snow-white bg-white px-2.5 md:p-5">
      <p className="font-semibold text-gunmetal-gray">Video</p>

      <iframe
        src={embeddedLink}
        className="h-[210px] w-[75%] self-center max-md:w-full md:h-[400px]"
      />
    </div>
  );
}
