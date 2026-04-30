import { fetchSchedules } from "@/lib/api";
import DailyScheduleClient from "./DailyScheduleClient";

export default async function Schedule() {
  const schedules = await fetchSchedules();

  return <DailyScheduleClient schedules={schedules} />;
}
