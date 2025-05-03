import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StockMovementTable from "../components/StockMovementTable";
import AddStockMovementForm from "../components/AddStockMovementForm";
import MovementDetailsModal from "../components/MovementDetailsModal";

const StockMovements = () => {
  const [showForm, setShowForm] = useState(false);
  const [movements, setMovements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("item");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMovement, setSelectedMovement] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  useEffect(() => {
    const fetchMovements = async () => {
      try {
        setLoading(true);
        const mockData = [
          {
            id: 1,
            item: "Laptop Dell XPS",
            from: "Main Warehouse",
            to: "IT Department",
            quantity: 5,
            date: "2025-04-15",
            receivedBy: "Ibrahim Ali",
            notes: "For new hires"
          },
          {
            id: 2,
            item: "Monitor 24\"",
            from: "Storage Room",
            to: "HR Department",
            quantity: 3,
            date: "2025-04-18",
            receivedBy: "Mustafa Kareem",
            notes: ""
          },
        ];
        setMovements(mockData);
      } finally {
        setLoading(false);
      }
    };
    fetchMovements();
  }, []);

  const filteredMovements = movements.filter((movement) => {
    const searchLower = searchTerm.toLowerCase();
    if (filterBy === "item") {
      return movement.item.toLowerCase().includes(searchLower);
    } else {
      return movement.from.toLowerCase().includes(searchLower) || 
             movement.to.toLowerCase().includes(searchLower);
    }
  });

  const totalPages = Math.ceil(filteredMovements.length / rowsPerPage);
  const paginatedMovements = filteredMovements.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleAddMovement = (newMovement) => {
    const newMov = {
      ...newMovement,
      id: Math.max(...movements.map((m) => m.id), 0) + 1,
    };
    setMovements([...movements, newMov]);
    setShowForm(false);
  };

  const handleViewDetails = (movement) => {
    setSelectedMovement(movement);
    setShowDetailsModal(true);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar title="Stock Movement Management" />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-lg font-semibold">
                  Manage Stock Movements
                </h3>
              </div>
              <button
                onClick={() => setShowForm(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"
              >
                <span className="mr-2">+</span>
                Add New Movement
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="flex border rounded-md overflow-hidden">
                  <select
                    value={filterBy}
                    onChange={(e) => {
                      setFilterBy(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="bg-gray-100 px-3 py-2 text-sm focus:outline-none"
                  >
                    <option value="item">By Item</option>
                    <option value="location">By Location</option>
                  </select>
                  <input
                    type="text"
                    placeholder={
                      filterBy === "item"
                        ? "Search items..."
                        : "Search locations..."
                    }
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="flex-1 px-3 py-2 text-sm focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Show:</span>
                <select
                  value={rowsPerPage}
                  onChange={(e) => {
                    setRowsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="border rounded px-3 py-2 text-sm"
                >
                  {[5, 10, 20, 50].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {loading ? (
              <div className="text-center py-8">Loading movements...</div>
            ) : (
              <>
                <StockMovementTable 
                  movements={paginatedMovements} 
                  onViewDetails={handleViewDetails}
                />

                {filteredMovements.length > 0 && (
                  <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-4">
                    <div className="text-sm text-gray-600">
                      Showing {(currentPage - 1) * rowsPerPage + 1} to{" "}
                      {Math.min(
                        currentPage * rowsPerPage,
                        filteredMovements.length
                      )}{" "}
                      of {filteredMovements.length} movements
                    </div>

                    <div className="flex gap-1">
                      <button
                        onClick={() =>
                          setCurrentPage((p) => Math.max(p - 1, 1))
                        }
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
                        onClick={() =>
                          setCurrentPage((p) => Math.min(p + 1, totalPages))
                        }
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

            {showForm && (
              <AddStockMovementForm
                onClose={() => setShowForm(false)}
                onSubmit={handleAddMovement}
              />
            )}
          </div>
        </main>
      </div>

      {showDetailsModal && (
        <MovementDetailsModal
          movement={selectedMovement}
          onClose={() => setShowDetailsModal(false)}
        />
      )}
    </div>
  );
};

export default StockMovements;
