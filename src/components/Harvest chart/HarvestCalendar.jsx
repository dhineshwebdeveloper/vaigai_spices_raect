import React from "react";
import turmericImg from "../../assets/images/harvesting/Turmeric.png";
import ChiliImg from "../../assets/images/harvesting/Chili.png";
import CorianderImg from "../../assets/images/harvesting/Coriander.png";
import CuminImg from "../../assets/images/harvesting/cumin.png";
import MustardImg from "../../assets/images/harvesting/Mustard.png";
import CardamomImg from "../../assets/images/harvesting/Cardamom.png";
import BlackPepperImg from "../../assets/images/harvesting/BlackPepper.png";
import FenugreekImg from "../../assets/images/harvesting/Fenugreek.png";
import FennelImg from "../../assets/images/harvesting/Fennel.png";
import CloveImg from "../../assets/images/harvesting/Clove.png";


const harvestData = [
  {
    spice: "Turmeric",
    season: "January - March",
    region: "Tamil Nadu, Andhra Pradesh",
    type: "Whole & Powder",
    image: turmericImg,
  },
  {
    spice: "Chili",
    season: "February - April",
    region: "Andhra Pradesh, Telangana",
    type: "Whole & Powder",
    image: ChiliImg,
  },
  {
    spice: "Coriander",
    season: "March - May",
    region: "Rajasthan, Gujarat",
    type: "Whole & Powder",
    image: CorianderImg,
  },
  {
    spice: "Cumin",
    season: "February - May",
    region: "Gujarat, Rajasthan",
    type: "Whole & Powder",
    image: CuminImg,
  },
  {
    spice: "Mustard",
    season: "April - June",
    region: "Punjab, Haryana",
    type: "Whole & Powder",
    image: MustardImg,
  },
  {
    spice: "Cardamom",
    season: "July - September",
    region: "Kerala, Karnataka",
    type: "Whole",
    image: CardamomImg,
  },
  {
    spice: "Black Pepper",
    season: "December - February",
    region: "Kerala, Tamil Nadu",
    type: "Whole & Powder",
    image: BlackPepperImg,
  },
  {
    spice: "Fenugreek",
    season: "February - March",
    region: "Rajasthan, Uttar Pradesh",
    type: "Whole",
    image: FenugreekImg,
  },
  {
    spice: "Fennel",
    season: "May - June",
    region: "Gujarat, Rajasthan",
    type: "Whole & Powder",
    image: FennelImg,
  },
  {
    spice: "Clove",
    season: "November - January",
    region: "Tamil Nadu, Kerala",
    type: "Whole",
    image: CloveImg,
  },
];

const HarvestCalendar = () => {
  return (
    <section className="bg-green-50 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12 animate-fade-up">
        <h2 className="text-4xl font-bold text-green-900 mb-4">
          Harvest Calendar
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Know the best time to source each spice. Here's an overview of when
          various spices are harvested across different regions in India.
        </p>
      </div>

      <div className="overflow-x-auto max-w-6xl mx-auto animate-fade-up">
        <table className="min-w-full table-auto border-collapse rounded-xl overflow-hidden shadow-lg">
          <thead className="bg-green-700 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Spice
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Harvest Season
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Region
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Type
              </th>
            </tr>
          </thead>
          <tbody className="bg-white text-gray-800">
            {harvestData.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-green-100 transition duration-200 ease-in-out border-b border-gray-200"
              >
                <td className="px-6 py-4 font-medium flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.spice}
                    className="w-6 h-6 rounded-full shadow-sm"
                  />
                  {item.spice}
                
                {item.spice}</td>
                <td className="px-6 py-4">{item.season}</td>
                <td className="px-6 py-4">{item.region}</td>
                <td className="px-6 py-4">{item.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default HarvestCalendar;
