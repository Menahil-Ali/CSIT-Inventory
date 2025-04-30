import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import AddProcurementForm from "../components/AddProcurementForm";
import { categories } from "../constants/categories";

const Procurements = () => {
  const [procurements, setProcurements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [supplierFilter, setSupplierFilter] = useState("All Suppliers");
  const [timeFilter, setTimeFilter] = useState("All Time");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchProcurements();
  }, []);

  const fetchProcurements = async () => {
    try {
      setLoading(true);
      // Mock data - replace with API call
      const mockData = [
        {
          id: 1,
          orderNumber: "PO-2023-001",
          supplier: "Tech Solutions Inc.",
          orderDate: "6/1/2023",
          totalAmount: 57500.00,
          document: { type: "pdf", name: "invoice.pdf", url: "#" },
        },
        {
          id: 2,
          orderNumber: "PO-2023-002",
          supplier: "Office Supplies Ltd.",
          orderDate: "5/15/2023",
          totalAmount: 5350.00,
          document: { type: "image", name: "receipt.jpg", url: "#" },
        },
      ];
      setProcurements(mockData);
    } finally {
      setLoading(false);
    }
  };

  // Get unique suppliers for filter dropdown
  const uniqueSuppliers = ["All Suppliers", ...new Set(procurements.map(p => p.supplier))];

  // Filter procurements
  const filteredProcurements = procurements.filter((procurement) => {
    const matchesSearch = procurement.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         procurement.supplier.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSupplier = supplierFilter === "All Suppliers" || procurement.supplier === supplierFilter;
    const matchesTime = timeFilter === "All Time" || true;
    
    return matchesSearch && matchesSupplier && matchesTime;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredProcurements.length / rowsPerPage);
  const paginatedProcurements = filteredProcurements.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleRefresh = () => {
    setLoading(true);
    fetchProcurements();
  };

  const handleDocumentClick = (document) => {
    if (document) {
      alert(`Opening document: ${document.name}`);
    }
  };

  // Function to create a new item (mock implementation)
  const createNewItem = async (itemData) => {
    console.log("Creating new item:", itemData);
    return { success: true, item: itemData };
  };

  return (
    <>
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar title="Procurement Management" />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-lg font-semibold">
                  Manage and track all procurement orders
                </h3>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleRefresh}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg flex items-center"
                >
                  <span className="mr-2">↻</span>
                  Refresh
                </button>
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"
                >
                  <span className="mr-2">+</span>
                  Add New Procurement
                </button>
              </div>
            </div>

            {/* Filters Section - Removed search bar and status filter */}
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Search by order number or supplier..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="flex-1 px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                
                <select
                  value={supplierFilter}
                  onChange={(e) => {
                    setSupplierFilter(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="border rounded px-3 py-2 text-sm"
                >
                  {uniqueSuppliers.map((supplier) => (
                    <option key={supplier} value={supplier}>
                      {supplier}
                    </option>
                  ))}
                </select>
                
                <select
                  value={timeFilter}
                  onChange={(e) => {
                    setTimeFilter(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="border rounded px-3 py-2 text-sm"
                >
                  <option>All Time</option>
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                </select>
              </div>
            </div>

            {/* Procurement Table - Removed status column */}
            {loading ? (
              <div className="text-center py-8">Loading procurements...</div>
            ) : (
              <>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Order Number
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Supplier
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Order Date
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Total Amount
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Document
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {paginatedProcurements.length > 0 ? (
                        paginatedProcurements.map((procurement) => (
                          <tr key={procurement.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {procurement.orderNumber}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {procurement.supplier}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {procurement.orderDate}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              ${procurement.totalAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {procurement.document ? (
                                <button
                                  onClick={() => handleDocumentClick(procurement.document)}
                                  className="text-blue-600 hover:text-blue-900 hover:underline"
                                >
                                  {procurement.document.name}
                                </button>
                              ) : (
                                <span className="text-gray-400">No document</span>
                              )}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500">
                            No procurements found matching your criteria
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                {/* Pagination Controls */}
                {filteredProcurements.length > 0 && (
                  <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-4">
                    <div className="text-sm text-gray-600">
                      Showing {(currentPage - 1) * rowsPerPage + 1} to{" "}
                      {Math.min(
                        currentPage * rowsPerPage,
                        filteredProcurements.length
                      )}{" "}
                      of {filteredProcurements.length} procurements
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">Rows per page:</span>
                      <select
                        value={rowsPerPage}
                        onChange={(e) => {
                          setRowsPerPage(Number(e.target.value));
                          setCurrentPage(1);
                        }}
                        className="border rounded px-3 py-1 text-sm"
                      >
                        {[5, 10, 20, 50].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex gap-1">
                      <button
                        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-3 py-1 border rounded disabled:opacity-50"
                      >
                        Previous
                      </button>

                      {Array.from({ length: Math.min(5, totalPages) }).map(
                        (_, i) => {
                          const page =
                            currentPage <= 3
                              ? i + 1
                              : currentPage >= totalPages - 2
                              ? totalPages - 4 + i
                              : currentPage - 2 + i;
                          return (
                            <button
                              key={page}
                              onClick={() => setCurrentPage(page)}
                              className={`px-3 py-1 border rounded ${
                                currentPage === page
                                  ? "bg-blue-100 text-blue-700"
                                  : ""
                              }`}
                            >
                              {page}
                            </button>
                          );
                        }
                      )}

                      <button
                        onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 border rounded disabled:opacity-50"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </main>
      </div>

      {/* Add Procurement Form */}
      {showForm && (
              <AddProcurementForm 
                categories={categories}
                onClose={() => setShowForm(false)} 
                onSubmit={async (data) => {
                  console.log("New procurement:", data);
                  
                  // If this is a new item (not selected from existing inventory)
                  if (!data.itemId || data.itemId === "") {
                    // Create the new item
                    const itemResponse = await createNewItem(data.newItem);
                    if (itemResponse.success) {
                      console.log("Item created successfully:", itemResponse.item);
                    }
                  }
                  
                  setShowForm(false);
                  handleRefresh();
                }} 
              />
            )}
         </>
  );
};

export default Procurements;
