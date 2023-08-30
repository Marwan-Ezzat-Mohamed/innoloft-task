interface OfferItemProps {
  icon: React.ReactNode;
  label: string;
  values: string[];
}

export default function OfferItem({ icon, label, values }: OfferItemProps) {
  return (
    <div className="text-slate-gray flex flex-grow items-start gap-2">
      <div className="h-6 w-6">{icon}</div>
      <div className="flex flex-col gap-2.5">
        <label>{label}</label>
        <div className="flex flex-wrap gap-1">
          {values.map((value) => (
            <span
              key={value}
              className="text-sm rounded-3xl bg-ghost-white px-3.5 py-1"
            >
              {value}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
