import { useLocation } from "react-router-dom";
import Barcode from "react-barcode";
import "./printpage.css";

export default function PrintPage() {
  const location = useLocation();
  const bookingData = location.state || {};

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="print-container">
      <div className="print-area">

        <div className="lr-sheet">
          <div className="lr-header">
            <h2>Logistics Receipt</h2>
            <p><strong>LR Number:</strong> {bookingData.lrNumber || "N/A"}</p>
          </div>
          <div className="barcode">
            <Barcode value={bookingData.lrNumber || "N/A"} />
          </div>
          <div className="lr-details">
            <p><strong>From:</strong>{bookingData.fromAddress}</p>
            <p><strong>To:</strong>{bookingData.toAddress}</p>
            <p><strong>Consignee:</strong> {bookingData.name || "N/A"}</p>
            <p><strong>Quantity:</strong> {bookingData.noOfGoods || "N/A"} BAG</p>
            <p><strong>Contact:</strong> {bookingData.contactNumber || "N/A"}</p>
            <p><strong>Amount:</strong> ₹{bookingData.amount || "N/A"}</p>
          </div>
        </div>
        <div className="lr-sheet">
          <div className="lr-header">
            <h2>Logistics Receipt</h2>
            <p><strong>LR Number:</strong> {bookingData.lrNumber || "N/A"}</p>
          </div>
          <div className="barcode">
            <Barcode value={bookingData.lrNumber || "N/A"} />
          </div>
          <div className="lr-details">
            <p><strong>From:</strong>{bookingData.fromAddress}</p>
            <p><strong>To:</strong>{bookingData.toAddress}</p>
            <p><strong>Consignee:</strong> {bookingData.name || "N/A"}</p>
            <p><strong>Quantity:</strong> {bookingData.noOfGoods || "N/A"} BAG</p>
            <p><strong>Contact:</strong> {bookingData.contactNumber || "N/A"}</p>
            <p><strong>Amount:</strong> ₹{bookingData.amount || "N/A"}</p>
          </div>
        </div>

      </div>

      <div className="lr-footer">
        <button onClick={handlePrint} className="print-button">Print</button>
      </div>
    </div>
  );
}
