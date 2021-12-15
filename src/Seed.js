import React, { useState, useEffect } from "react";

function Seed() {
  const [cars, setCars] = useState(null);

  //useEffect is a side effect that runs after every render
  useEffect(() => {
    if (localStorage) {
      const cars = JSON.parse(localStorage.getItem("cars"));
      if (cars) {
        setCars(cars);
      }
    }
  }, []);

  function resetCars() {
    //Save the seed car data to local storage
    const seedCarData = [
      {
        make: "Lincoln",
        model: "Navigator L",
        year: 2008,
      },
      {
        make: "Buick",
        model: "Park Avenue",
        year: 1993,
      },
      {
        make: "Mercedes-Benz",
        model: "SLR McLaren",
        year: 2009,
      },
      {
        make: "Jeep",
        model: "Wrangler",
        year: 2002,
      },
      {
        make: "Mazda",
        model: "MX-5",
        year: 1998,
      },
      {
        make: "Mercury",
        model: "Cougar",
        year: 1970,
      },
      {
        make: "Dodge",
        model: "Sprinter",
        year: 2009,
      },
      {
        make: "Saab",
        model: "900",
        year: 1990,
      },
      {
        make: "Jeep",
        model: "Cherokee",
        year: 1998,
      },
      {
        make: "BMW",
        model: "M3",
        year: 2009,
      },
    ];

    setCars(seedCarData);
    if (localStorage) {
      localStorage.setItem("cars", JSON.stringify(seedCarData));
      console.log("Seed data saved to local storage.");
    }
  }

  return (
    <div className="container">
      <p>Seed Data</p>
      <ul>
        {!cars && (
          <button type="button" className="btn btn-warning" onClick={resetCars}>
            Save Seed Data to Local Storage
          </button>
        )}
        {cars &&
          cars.map((car, index) => {
            return (
              <li key={index}>
                {car.year} {car.make} {car.model}
              </li>
            );
          })}
      </ul>
      <div></div>
    </div>
  );
}

export default Seed;
