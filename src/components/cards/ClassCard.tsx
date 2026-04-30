import Link from "next/link";
import { ClassInfo } from "@/types";

interface Props {
  classInfo: ClassInfo;
}

export default function ClassCard({ classInfo }: Props) {
  return (
    <div
      className={`${
        classInfo.colSpan === 2 ? "md:col-span-2" : ""
      } bg-surface rounded-xl border border-surface-dim hover:shadow-[0_8px_30px_rgba(239,217,180,0.2)] transition-shadow duration-300 flex flex-col h-auto relative overflow-hidden group`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={classInfo.image}
        alt={classInfo.title}
        className="w-full h-48 md:h-64 object-cover"
      />
      <div className="p-margin flex flex-col justify-between flex-1">
        <div>
          <h3 className="font-h3 text-h3 text-on-background mb-2">
            {classInfo.title}
          </h3>
          <p
            className={`font-body-md text-body-md text-on-surface-variant ${
              classInfo.colSpan ? "max-w-[28rem]" : ""
            }`}
          >
            {classInfo.description}
          </p>
        </div>
        <div className="flex items-center justify-between mt-6 pt-6 border-t border-surface-dim">
          <div className="flex items-center space-x-2 text-on-surface-variant">
            <span className="material-symbols-outlined text-sm">schedule</span>
            <span className="font-body-md text-sm">{classInfo.duration} Dk</span>
          </div>
          <Link href="/ders-programi" className="text-primary font-button text-button hover:underline">
            Programı İncele
          </Link>
        </div>
      </div>
    </div>
  );
}
