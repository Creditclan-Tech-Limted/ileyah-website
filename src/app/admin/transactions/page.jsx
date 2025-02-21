import Drawer from "@/components/Drawer";
import Button from "@/components/global/Button";
import Input from "@/global/Input";
import TextArea from "@/global/TextArea";
import {
  IconBrandWhatsapp,
  IconHeadset,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import React from "react";
import { useForm } from "react-hook-form";

const ShowAssetPortfolio = ({ isOpen, onClose, data }) => {
  if (!data) return;
  return (
    <>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        title={`${data["ADDRESS OF PROPERTY"]}`}
      >
        <div className="flex flex-col  space-y-5">
          <div>
            <h2 className="text-xl font-black mb-2">Property Information</h2>
            <div className="space-y-2">
              <p>
                <strong className="text-lg md-1 font-semibold">Rent:</strong>{" "}
                {data.RENT || "N/A"}
              </p>
              <p>
                <strong className="text-lg mb-1 font-semibold">
                  Name of Landlord:
                </strong>{" "}
                {data["NAME OF LANDLORD"] || "N/A"}
              </p>
              <p>
                <strong className="text-lg mb-1 font-semibold">
                  Landlord Contact:
                </strong>{" "}
                {data["CONTACT DETAILS"] || "N/A"}
              </p>
              <p>
                <strong className="text-lg mb-1 font-semibold">
                  Agent name:
                </strong>{" "}
                {data["NAME OF AGENT (IF ANY)"] || "N/A"}
              </p>
              <p>
                <strong className="text-lg mb-1 font-semibold">
                  Agent Contact:
                </strong>{" "}
                {data["AGENT CONTACT ( IF ANY)"] || "N/A"}
              </p>
              <p>
                <strong className="text-lg mb-1 font-semibold">
                  Address of property:
                </strong>{" "}
                {data["ADDRESS OF PROPERTY"] || "N/A"}
              </p>
              <p>
                <strong className="text-lg mb-1 font-semibold">
                  Apartment Type:
                </strong>{" "}
                {data["APARTMENT TYPE"] || "N/A"}
              </p>
              <p>
                <strong className="text-lg mb-1 font-semibold">
                  Date Disbursed:
                </strong>{" "}
                {data["DATE DISBURSED"] || "N/A"}
              </p>
              <p>
                <strong className="text-lg mb-1 font-semibold">
                  Effective date:
                </strong>{" "}
                {data["EFFECTIVE DATE"] || "N/A"}
              </p>
              <p>
                <strong className="text-lg mb-1 font-semibold">
                  First Payment Date:
                </strong>{" "}
                {data["FIRST REPAYMENT DATE"] || "N/A"}
              </p>
              <p>
                <strong className="text-lg mb-1 font-semibold">
                  Items Collected:
                </strong>{" "}
                {data["ITEMS COLLECTED"] || "N/A"}
              </p>
              <p>
                <strong className="text-lg mb-1 font-semibold">
                  Fulfillment:
                </strong>{" "}
                {data["FULFILLMENT"] || "N/A"}
              </p>
              <p>
                <strong className="text-lg mb-1 font-semibold">
                  Tenant Name:
                </strong>{" "}
                {data["TENANT NAME"] || "N/A"}
              </p>
              <p>
                <strong className="text-lg mb-1 font-semibold">Rent:</strong>{" "}
                {data["RENT"] || "N/A"}
              </p>
              <p>
                <strong className="text-lg mb-1 font-semibold">
                  Duration:
                </strong>{" "}
                {data["Duration"] || "N/A"}
              </p>
              <p>
                <strong className="text-lg mb-1 font-semibold">
                  Agency & C:
                </strong>{" "}
                {data["Agency & C"] || "N/A"}
              </p>
              <p>
                <strong className="text-lg mb-1 font-semibold">
                  Agreement:
                </strong>{" "}
                {data["Agreement"] || "N/A"}
              </p>
              <p>
                <strong className="text-lg mb-1 font-semibold">Caution:</strong>{" "}
                {data["Caution"] || "N/A"}
              </p>
              <p>
                <strong className="text-lg mb-1 font-semibold">S C:</strong>{" "}
                {data["S C"] || "N/A"}
              </p>
              <p>
                <strong className="text-lg mb-1 font-semibold">
                  Total Amount Paid:
                </strong>{" "}
                {data["Total Amount Paid"] || "N/A"}
              </p>
              <p>
                <strong className="text-lg mb-1 font-semibold">
                  Fulfillment:
                </strong>{" "}
                {data.FULFILLMENT || "N/A"}
              </p>
              <p>
                <strong className="text-lg mb-1 font-semibold">Address:</strong>{" "}
                {data["ADDRESS OF PROPERTY"] || "N/A"}
              </p>
            </div>
          </div>
          <div>
            <Button variant="outlined" className="mt-8" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default ShowAssetPortfolio;
