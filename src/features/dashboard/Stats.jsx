import { HiBriefcase, HiOutlineBanknotes, HiOutlineCalendarDays, HiOutlineChartBar } from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, cabinCounts }) {
  const numBookings = bookings.length;

  const sales = bookings.reduce((acc, curr) => acc + curr.totalPrice, 0);

  const checkins = confirmedStays.length;

  const occupation = confirmedStays.reduce((acc, curr) => acc + curr.numNights, 0) / (numDays * cabinCounts);

  return (
    <>
      <Stat icon={<HiBriefcase />} title="Bookings" value={numBookings} color="blue"></Stat>
      <Stat icon={<HiOutlineBanknotes />} title="Sales" value={formatCurrency(sales)} color="green"></Stat>
      <Stat icon={<HiOutlineCalendarDays />} title="Check ins" value={checkins} color="indigo"></Stat>
      <Stat
        icon={<HiOutlineChartBar />}
        title="Occupancy rate"
        value={Math.round(occupation * 100) + "%"}
        color="yellow"
      ></Stat>
    </>
  );
}

export default Stats;
