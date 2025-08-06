import Card from "./components/Card"
import Card2 from "./components/Card2"
import DistributionChart from "./components/DistributionChart"
import MonthlyCompletedLineChart from "./components/LineChart"

const datas=[
  { month: 'Jan', count: 3 },
  { month: 'Feb', count: 7 },
  { month: 'Mar', count: 5 },
  { month: 'Apr', count: 3 },
  { month: 'May', count: 9 },
  { month: 'Jun', count: 13 },
  { month: 'Jul', count: 5 },
  { month: 'Aug', count: 5 },
  { month: 'Sep', count: 1 },
  { month: 'Oct', count: 5 },
  { month: 'Nov', count: 15 },
  { month: 'Dec', count: 11 },
]


const Dashboard = () => {
  return (
    <div>
        <h1 className='p-2 font-semibold text-xl mb-4'>Admin Dashboard</h1>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-5 md:grid-cols-4'>

            <Card title="Summary" data={23} bordercolor="border-blue-400" subtitle='this month' subtitle1='Completed shoots' subtitle2='Fully completed' data1={30} />
            <Card2 title="Pending Approvals" data={3}  subtitle="Please confirm as soon as possible" subtitle1='' subtitle2='' />
            <Card2 title="Pending Photo Delivery" data={5}  subtitle="Shoots completed but photos not delivered" subtitle1='' subtitle2='' />
            <Card2 title="Revenue (in RM)" data={898.00}  subtitle="this month" subtitle1='' subtitle2='' />
        </div>

        <div>
            <p className="p-2 font-semibold  text-xl my-4">Upcoming Bookings</p>

        </div>

        <div className="mb-20">
          <DistributionChart/>
        </div>

        <div>
          <MonthlyCompletedLineChart data={datas}/>
        </div>

    </div>
  )
}

export default Dashboard