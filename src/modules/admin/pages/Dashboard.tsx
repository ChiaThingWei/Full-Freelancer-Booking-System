import { useMonthlyBookingStats } from "@/lib/hooks/useBookingQuery"
import Card from "../components/Card"
import Card2 from "../components/Card2"
import DistributionChart from "../components/DistributionChart"
import MonthlyCompletedLineChart from "../components/LineChart"
import UpcomingBookingCard from "../components/UpcomingBookingCard"
import MonthlyRevenueLineChart from "../components/RevenueLineChart"
import { useNavigate } from "react-router-dom"


const Dashboard = () => {

  const { data, isLoading, error } = useMonthlyBookingStats()
  const navigate = useNavigate()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading stats</div>


  return (
    <div>
        <h1 className='p-2 font-semibold text-xl mb-4'>Admin Dashboard</h1>
        <div className='bg-white p-4 rounded-xl grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-5 lg:grid-cols-4'>

            <Card title="Summary"  
              bgColor="bg-blue-200"
              subtitle='this month' 
              subtitle1='Total Booking' 
              subtitle2='Total Confirmed' 
              subtitle3='Done Shooting'
              subtitle4="Fully Completed"
              data1={data?.total || 0}
              data2={data?.totalPending || 0}
              data3={data?.byStatus['shooting_done'] || 0} 
              data4={data?.byStatus['completed'] || 0}
              />

      
              <Card2 title="Pending Approvals" 
                data={data?.totalPending || 0}  
                subtitle="Please confirm as soon as possible"
                bgColor="bg-red-300" 
                onClick={() => navigate('/admin/managebooking?tab=pending')}
              />
           

            <Card2 title="Pending Photo Delivery" 
              data={data?.totalShootingDone || 0}  
              subtitle="Shoots completed but photos not delivered" 
              onClick={() => navigate('/admin/managebooking?tab=shooting_done')}
               />
            <Card title="Revenue (in RM)" 
             data1={data?.estimatedRevenue || 0}  
             data2={data?.totalRevenue || 0}
             subtitle="this month" 
             subtitle1="Estimated Revenue"
             subtitle2="Exact Revenue"
             bgColor="bg-yellow-200"
             />
        </div>

        <div className=" my-8 border-gray-300">
            <p className="pl-4 font-semibold  text-xl mt-4">Calender</p>
            <UpcomingBookingCard/>
        </div>

        <p className="pl-4 font-semibold  text-xl mt-4 mb-6">Statistic</p>
        <div className="lg:flex mb-4">
          <div className="bg-white rounded-xl shadow-md flex px-6 py-10 justify-center lg:w-1/2">
          <MonthlyRevenueLineChart/>
          </div>

          <div className="lg:w-1/2 bg-white md:ml-2 mt-4 md:mt-0 px-6 py-10  rounded-xl shadow-md">
          <MonthlyCompletedLineChart/>
          </div>
        </div>

      

        <div className="mb-20 md:w-1/2   bg-white p-10  rounded-xl shadow-md">
          <DistributionChart/>
        </div>

        

        <div className=""></div>

    </div>
  )
}

export default Dashboard