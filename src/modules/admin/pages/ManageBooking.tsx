import { useBookingStore } from "@/lib/store/bookingFilterStore"
// import BookingCard from "../components/BookingCard"
import Menu from "../components/Menu"
import { useBookingsByStatusPaginated } from "@/lib/hooks/useBookingQuery"
import DataTable from "../components/DataTable"
import {useEffect, useRef } from "react"
import {debounce} from 'lodash'
import { Search } from "lucide-react"
import { useLocation } from "react-router-dom"


const ManageBooking = () => {

  const {page, setPage, limit,setLimit,statusFilter, setStatusFilter, currentClientId,searchQuery, setSearchQuery,searchInput, setSearchInput} = useBookingStore()
  const {data:paginatedData = [], isLoading: isPageLoading, error: isPageError} = useBookingsByStatusPaginated(statusFilter,page,limit,currentClientId ?? 0,searchQuery)
  const location = useLocation();

  console.log(currentClientId)

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tab = searchParams.get('tab') || 'all';
    setStatusFilter(tab);
  }, [location.search, setStatusFilter]);
  

  const debouncedRef = useRef(
    debounce((val: string, setSearchQuery: (v: string) => void, setPage: (v: number) => void) => {
      setSearchQuery(val);
      setPage(1);
    }, 500)
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    debouncedRef.current(e.target.value, setSearchQuery, setPage);
  };

  useEffect(() => {
    const currentDebounce = debouncedRef.current
  
    return () => {
      currentDebounce.cancel()
    };
  }, [])
  

    if (isPageLoading) return <p>Loading...</p>;
    if (isPageError) return <p>Something went wrong</p>;

  return (
    <div className="w-full lg:block ">
       <h1 className='p-2 font-semibold text-xl mb-4'>Manage Booking</h1>
       
        <div className="flex flex-col">
          <Menu setStatusFilter={setStatusFilter} active={statusFilter} />
         
        </div>

        <div className="flex flex-row shadow-sm w-2/3 md:w-1/2 bg-white p-3 rounded-xl">
          <Search className="my-auto size-7 text-blue-500" strokeWidth={3}/>
          <input
              type="text"
              placeholder="Search by name, email, phone..."
              value={searchInput}
            
              onChange={handleSearchChange}
              className=" p-3 ml-3 w-full border-2 bg-gray-100 rounded-xl"
            />
       
        </div>

      <div className="mt-4 w-full">
        {/* <BookingCard bookings={bookingsToShow || []}/> */}
        <DataTable bookings={paginatedData || []} tablePage ={page} tablePageSize={limit} />
      </div>

      <div className="p-4 flex w-full flex-row justify-between shadow-sm bg-white rounded-lg mt-4">
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
          disabled={paginatedData.length < limit}
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