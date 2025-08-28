import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '@/index.css'
import { format } from 'date-fns';

type Props = {
    selectedDate: Date | null;
    setSelectedDate: (date: Date) => void;
  };

export default function BookingDatePicker({ selectedDate, setSelectedDate }: Props) {

  return (
    <div className="max-w-sm ">
      
      <DatePicker
        selected={selectedDate}
        onChange={(date: Date | null) => {
          if (date) {
            const fixedDate = new Date(date);
            fixedDate.setHours(12); 
            setSelectedDate(fixedDate);
          }
        }}
        minDate={new Date()}
        placeholderText="Select a date"
        className="border-2 border-gray-300 bg-white p-2 w-full rounded"
        dateFormat="yyyy-MM-dd"
      />

      {selectedDate && (
        <p className="mt-2 text-sm text-teal-600">
         ✅Done Selected：{selectedDate ? format(selectedDate, 'yyyy-MM-dd') : ''}
        </p>
      )}
    </div>
  );
}
