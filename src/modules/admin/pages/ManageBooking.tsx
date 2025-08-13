import { useBookingFilterStore, useBookingPaginationStore } from "@/lib/store/bookingFilterStore"
import BookingCard from "../components/BookingCard"
import Menu from "../components/Menu"
import { useBookingsByStatusPaginated } from "@/lib/hooks/useBookingQuery"
import DataTable from "../components/DataTable"


const ManageBooking = () => {

  // const [page, setPage] = useState(1)
  // const [limit, setLimit] = useState(5);
  const {page, setPage, limit,setLimit} = useBookingPaginationStore()
  const {statusFilter, setStatusFilter} = useBookingFilterStore()
  const {data:paginatedData, isLoading: isPageLoading, error: isPageError} = useBookingsByStatusPaginated(statusFilter,page,limit)
 
  
    if (isPageLoading) return <p>Loading...</p>;
    if (isPageError) return <p>Something went wrong</p>;

  return (
    <div className="w-full lg:block ">
       <h1 className='p-2 font-semibold text-xl mb-4'>Manage Booking</h1>
       
        <div className="">
          <Menu setStatusFilter={setStatusFilter} active={statusFilter} />
        </div>

      <div className="mt-4 w-full">
        {/* <BookingCard bookings={bookingsToShow || []}/> */}
        <DataTable bookings={paginatedData || []} tablePage ={page} tablePageSize={limit} />
      </div>

      <div className="p-4 flex w-full flex-row justify-between bg-white rounded-lg mt-4">
      {/* Page size 控制 */}
      <div className="flex items-center gap-2 my-auto">
        <label>Show :</label>
        <select
          value={limit}
          onChange={(e) => {
            setLimit(Number(e.target.value))
            setPage(1)
          }}
          className="border-2 p-1 rounded border-gray-200 cursor-pointer"
        >
          {[5, 10, 20, 50].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      {/* 分页控制 */}
      <div className="flex justify-between my-auto">
        <button
          onClick={() => setPage(Math.max(1, page - 1))}
          disabled={page === 1}
          className="border px-3 py-1 rounded disabled:opacity-50 disabled:cursor-auto cursor-pointer"
        >
          Prev
        </button>
        <span className="my-auto mx-2">{page}</span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={!paginatedData || paginatedData.length < limit} 
          className="border px-3 py-1 rounded disabled:opacity-50 disabled:cursor-auto cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
    </div>
  )
}

export default ManageBooking