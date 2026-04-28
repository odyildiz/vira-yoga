import { fetchMemberships } from "@/lib/api";
import MembershipCard from "./cards/MembershipCard";

export default async function Memberships() {
  const memberships = await fetchMemberships();

  // Splitting them into top 3 and bottom 2 matching the original design
  const topMemberships = memberships.slice(0, 3);
  const bottomMemberships = memberships.slice(3, 5);

  return (
    <section
      id="memberships"
      className="pt-32 md:pt-48 pb-20 px-gutter bg-background max-w-max_width mx-auto"
    >
      <div className="text-center mb-xl">
        <h2 className="font-h2 text-h2 text-on-background mb-4">Üyelikler</h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
          Tek ders deneyiminden düzenli pratiğe kadar farklı ihtiyaçlara uygun
          paketlerimizi inceleyebilirsin. Paketler hakkında detaylı bilgi almak
          veya sana en uygun seçeneği belirlemek için bizimle iletişime
          geçebilirsin.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg justify-center items-center">
        {topMemberships.map((membership) => (
          <MembershipCard key={membership.id} membership={membership} />
        ))}
      </div>

      {bottomMemberships.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg justify-center items-center mt-lg max-w-4xl mx-auto">
          {bottomMemberships.map((membership) => (
            <MembershipCard key={membership.id} membership={membership} />
          ))}
        </div>
      )}
    </section>
  );
}
