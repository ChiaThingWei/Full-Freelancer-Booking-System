import Card from "./components/Card"
import Card2 from "./components/Card2"

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

    </div>
  )
}

export default Dashboard