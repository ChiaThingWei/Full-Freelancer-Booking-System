// import { useState } from 'react';
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
              setSelectedDate(date);
            }
          }}
        minDate={new Date()}
        placeholderText="选择日期"
        className="border-2 border-gray-300 bg-green-300 p-2 w-full rounded"
        dateFormat="yyyy-MM-dd"
      />

      {selectedDate && (
        <p className="mt-2 text-sm text-teal-600">
         ✅ 已选择日期：{selectedDate ? format(selectedDate, 'yyyy-MM-dd') : ''}
        </p>
      )}
    </div>
  );
}
