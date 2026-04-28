import { fetchClasses } from "@/lib/api";
import ClassCard from "./cards/ClassCard";

export default async function Classes() {
  const classes = await fetchClasses();

  return (
    <section id="classes" className="py-xxl bg-surface-container-low px-gutter">
      <div className="max-w-max_width mx-auto">
        <div className="text-center mb-xl">
          <h2 className="font-h2 text-h2 text-on-background mb-4">Dersler</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          {classes.map((classInfo) => (
            <ClassCard key={classInfo.id} classInfo={classInfo} />
          ))}
        </div>
        <div className="mt-xl text-center">
          <button className="font-button text-button px-8 py-3 border border-outline rounded-full hover:bg-surface-container transition-colors duration-300">
            Tüm Dersleri Gör
          </button>
        </div>
      </div>
    </section>
  );
}
