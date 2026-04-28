import { fetchTeachers } from "@/lib/api";
import TeacherCard from "./cards/TeacherCard";

export default async function Teachers() {
  const teachers = await fetchTeachers();

  return (
    <section id="teachers" className="py-xxl px-gutter max-w-max_width mx-auto">
      <div className="text-center mb-xl">
        <h2 className="font-h2 text-h2 text-on-background mb-4">Eğitmenler</h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
          Pratiğinizde size rehberlik edecek deneyimli ekibimizle tanışın.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
        {teachers.map((teacher) => (
          <TeacherCard key={teacher.id} teacher={teacher} />
        ))}
      </div>
    </section>
  );
}
