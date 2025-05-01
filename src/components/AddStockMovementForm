import { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const CalendarPicker = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 3)); // April 2025

  const toggleCalendar = () => setIsOpen(!isOpen);
  const closeCalendar = () => setIsOpen(false);

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

  const renderCalendarDays = () => {
    const month = currentMonth.getMonth();
    const year = currentMonth.getFullYear();
    const totalDays = daysInMonth(month, year);
    const firstDay = firstDayOfMonth(month, year);
    
    // Previous month days
    const prevMonthDays = daysInMonth(month - 1, year);
    const prevMonthDaysToShow = firstDay;
    
    // Next month days
    const totalCells = Math.ceil((totalDays + firstDay) / 7) * 7;
    const nextMonthDaysToShow = totalCells - (totalDays + firstDay);

    const days = [];
    
    // Previous month
    for (let i = prevMonthDays - prevMonthDaysToShow + 1; i <= prevMonthDays; i++) {
      days.push(<div key={`prev-${i}`} className="text-gray-400 py-1">{i}</div>);
    }
    
    // Current month
    for (let i = 1; i <= totalDays; i++) {
      const isSelected = i === 20 && month === 3 && year === 2025; // April 20, 2025
      days.push(
        <div 
          key={`current-${i}`} 
          className={`py-1 cursor-pointer ${isSelected ? 'bg-blue-100 font-bold' : 'hover:bg-gray-100'}`}
          onClick={() => {
            const selectedDate = new Date(year, month, i);
            onChange(selectedDate.toLocaleDateString('en-GB'));
            closeCalendar();
          }}
        >
          {i}
        </div>
      );
    }
    
    // Next month
    for (let i = 1; i <= nextMonthDaysToShow; i++) {
      days.push(<div key={`next-${i}`} className="text-gray-400 py-1">{i}</div>);
    }
    
    return days;
  };

  return (
    <div className="relative">
      <div className="flex items-center">
        <input
          type="text"
          value={value}
          readOnly
          className="w-full px-3 py-2 border rounded-md focus:outline-none"
        />
        <button
          type="button"
          onClick={toggleCalendar}
          className="ml-2 p-2 border rounded-md hover:bg-gray-100 text-gray-600"
        >
          <FaCalendarAlt className="text-lg" />
        </button>
      </div>
      
      {isOpen && (
        <div className="absolute z-10 mt-1 w-64 bg-white border rounded-md shadow-lg p-3">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">April 2025</span>
            <button className="text-gray-500 hover:text-gray-700">
              ▼
            </button>
          </div>
          
          <div className="grid grid-cols-7 gap-1 text-center text-xs">
            <div className="text-gray-400 font-medium">Su</div>
            <div className="text-gray-400 font-medium">Mo</div>
            <div className="text-gray-400 font-medium">Tu</div>
            <div className="text-gray-400 font-medium">We</div>
            <div className="text-gray-400 font-medium">Th</div>
            <div className="text-gray-400 font-medium">Fr</div>
            <div className="text-gray-400 font-medium">Sa</div>
            
            {renderCalendarDays()}
          </div>
          
          <div className="flex justify-between mt-2 pt-2 border-t">
            <button 
              className="text-blue-600 hover:text-blue-800"
              onClick={() => {
                onChange(new Date().toLocaleDateString('en-GB'));
                closeCalendar();
              }}
            >
              Today
            </button>
            <button 
              className="text-gray-600 hover:text-gray-800"
              onClick={() => {
                onChange('');
                closeCalendar();
              }}
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const AddStockMovementForm = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    item: '',
    from: '',
    to: '',
    quantity: '',
    date: '20/04/2025',
    receivedBy: '',
    notes: ''
  });

  const locations = [
    "Main Warehouse",
    "Storage Room",
    "IT Department",
    "HR Department",
    "Finance Department"
  ];

  const items = [
    "Laptop Dell XPS",
    "Monitor 24\"",
    "Keyboard",
    "Mouse",
    "Desk Chair"
  ];

  const receivers = [
    "John Doe",
    "Jane Smith",
    "Michael Brown"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateChange = (date) => {
    setFormData(prev => ({
      ...prev,
      date
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      item: formData.item || 'Unknown Item',
      receivedBy: formData.receivedBy || 'Unknown Receiver'
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] flex flex-col">
        <div className="p-6 overflow-y-auto">
          <h3 className="text-xl font-semibold mb-4">
            Add New Stock Movement
          </h3>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Item</h4>
                <select
                  name="item"
                  value={formData.item}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select an item</option>
                  {items.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                  ))}
                </select>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">From Location</h4>
                <select
                  name="from"
                  value={formData.from}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select source location</option>
                  {locations.map((location, index) => (
                    <option key={index} value={location}>{location}</option>
                  ))}
                </select>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">To Location</h4>
                <select
                  name="to"
                  value={formData.to}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select destination location</option>
                  {locations.map((location, index) => (
                    <option key={index} value={location}>{location}</option>
                  ))}
                </select>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Quantity</h4>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  min="1"
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter quantity"
                />
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Movement Date</h4>
                <CalendarPicker 
                  value={formData.date} 
                  onChange={handleDateChange} 
                />
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Received By</h4>
                <select
                  name="receivedBy"
                  value={formData.receivedBy}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select receiver</option>
                  {receivers.map((receiver, index) => (
                    <option key={index} value={receiver}>{receiver}</option>
                  ))}
                </select>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Notes (Optional)</h4>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="2"
                  placeholder="Enter any additional notes"
                />
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Record Movement
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStockMovementForm;
