import React, { useState, useEffect } from "react";

function Boats() {
  const [allBoats, setAllBoats] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [duplicateResults, setDuplicateResults] = useState([]);
 
  const [keywords, setKeywords] = useState("");
  const [addBoat, setAddBoat] = useState(false);
  const [searchBoat, setSearchBoat] = useState(false);
  
  const [filterBool, setFilterBool] = useState(false);
  const [filterMake, setFilterMake] = useState('');
  const [filterModel, setFilterModel] = useState('');
  
  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [description, setDescription] = useState('');

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const defaultBoats = [
      {
        make: "Four Winns",
        model: "Vista 355 Coupe",
        year: "2021",
        description:
          "Pictured on the April 2019 cover, this outboard-powered Four Winns Vista 355 Coupe OB cruiser offers a single-level topside layout, and combines function and features in a boat that sleeps six and entertains a bunch more in luxury.",
        url: "./images/four_winns.jpg",  
      },
      {
        make: "Monterey",
        model: "305 SS",
        year: "2021",
        description:
          "The Monterey 305 SS is a sporty and luxurious dayboat that adorned the March 2019 cover.",
        url: "./images/monterey_305_supersport.jpg",  
      },
      {
        make: "Crownline",
        model: "E 285 XS",
        year: "2021",
        description:
          "The Crownline E 285 XS, which appeared on the May 2019 cover, is a spacious and sporty dayboat that you can easily trailer to your local lake. ",
        url: "./images/285_xs_crownline.jpg",  
      },
      {
        make: "Centurion",
        model: "fi25",
        year: "2021",
        description:
          "Appearing on the June 2019 cover, the Centurion Fi25 turns heads wherever it goes. Not only is the styling sleek and aggressive, but this boat comes loaded with wake-making prowess, thanks in large measure to the Opti-V hull.",
        url: "./images/centurion_fi25.jpg",  
      },
      {
        make: "Starcraft",
        model: "191 SVX",
        year: "2021",
        description:
          "A boat doesn't have to be huge and cost a fortune to make our list of top models. Appearing on the cover the September 2019 issue, the Starcraft SVX 191 OB targets first-time boaters and budget-conscious buyers. ",
        url: "./images/starcraft_svx_191.jpg",  
      },
      {
        make: "Yamaha",
        model: "212 XD",
        year: "2021",
        description:
          "This boat is wakesurf ready so you better buckle up cowboys, your in for a treat. The 2021 Yamaha 212XD is the latest model to Yamaha’s 21-ft. (6.4 m) series with all the same reliability and functionality, plus newly-added technology to make it that much better.",
        url: "./images/yamaha_212.jpg",  
      },
    ];

    setAllBoats(defaultBoats);
    setSearchResults(defaultBoats);
    setDuplicateResults(defaultBoats);
  }, []);

  function searchBoats() {

    if(keywords){
        const keywordsArray = keywords.toLowerCase().split(' ');
        const results = allBoats.filter(car => {
            
            for(const word of keywordsArray){
                if(!car.make.toLowerCase().includes(word) && 
                   !car.model.toLowerCase().includes(word) &&
                   car.year !== parseInt(word)){
                    return false;
                }
            }
            return true;
        });
        setSearchResults(results);
    }
    else{
        setSearchResults(allBoats);
    }
  }

  return (
    <div className="container">
      <h1 className="d-flex flex-row justify-content-center">Boats in Stock</h1>
      <div className="d-flex flex-row justify-content-center mt-2">
        {!searchBoat && (
          <button
            type="button"
            className="btn btn-primary mb-2 me-2"
            onClick={() => setSearchBoat(true)}
          >
            Search Boats
          </button>
        )}

        {!filterBool && (
          <button
            type="button"
            className="btn btn-primary mb-2 me-2"
            onClick={() => setFilterBool(true)}
          >
            Filter Boats
          </button>
        )}

        {!addBoat && (
          <button
            type="button"
            className="btn btn-primary mb-2"
            onClick={() => setAddBoat(true)}
          >
            Add New Boat
          </button>
        )}
      </div>

      {filterBool && (
          <div>
            <label htmlFor="filterMake" className="form-label">
              Make
            </label>
            <select
              name="FilterMake"
              className="form-select mb-2"
              onChange={(evt) => setFilterMake(evt.currentTarget.value)}
            >
            <option value=""></option>
            {duplicateResults.map((boat, index) => (
              <option key={index} value={boat.make}>
                {boat.make}
              </option>
            ))}
            </select>

            <label htmlFor="filterModel" className="form-label">
              Model
            </label>
            <select
              name="FilterModel"
              className="form-select mb-2"
              onChange={(evt) => setFilterModel(evt.currentTarget.value)}
            >
            <option value=""></option>
            {duplicateResults.map((boat, index) => (
              <option key={index} value={boat.model}>
                {boat.model}
              </option>
            ))}
            </select>

          <button
          type="button"
          className="btn btn-primary mb-2 me-2"
          onClick={() => {
            const newResultsMake = searchResults.filter(((boat) => boat.make === filterMake))
            const newResultsModel = searchResults.filter(((boat) => boat.model === filterModel))

            
            if (filterMake) setSearchResults(newResultsMake)
            else {
              setSearchResults(duplicateResults)
            }

            if (filterModel) {
              setSearchResults(newResultsModel)
            }

            if (filterMake && filterModel) setSearchResults([...newResultsMake, newResultsModel,])

          }}
          >
          Filter Boats
          </button>
          <button
          type="button"
          className="btn btn-primary mb-2 me-2"
          onClick={() => setFilterBool(false)}
          >
          Cancel
          </button>

          </div>
          
          
      )}

      {searchBoat && (
        <div>
          <div>
            <label htmlFor="search" className="form-label">
              Search
            </label>
            <input
              name="search"
              className="form-control mb-2"
              onChange={(evt) => setKeywords(evt.currentTarget.value)}
            ></input>
          </div>
          <button
            type="button"
            className="btn btn-primary mb-2 me-2"
            onClick={() => searchBoats()}
          >
            Search
          </button>
          <button
            type="button"
            className="btn btn-primary mb-2"
            onClick={() => setSearchBoat(false)}
          >
            Cancel
          </button>
        </div>
      )}

      {addBoat && (
        <div>
          
          <div>
            <label htmlFor="year" className="form-label">
              Year
            </label>
            <input name="year" className="form-control mb-2" onChange={(evt) => setYear(evt.currentTarget.value)}></input>
          </div>
          
          <div>
            <label htmlFor="make" className="form-label">
              Make
            </label>
            <input
              name="make"
              className="form-control mb-2"
              onChange={(evt) => setMake(evt.currentTarget.value)}
            ></input>
          </div>

          <div>
            <label htmlFor="model" className="form-label">
              Model
            </label>
            <input name="model" className="form-control mb-2" onChange={(evt) => setModel(evt.currentTarget.value)}></input>
          </div>

          <div>
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea name="Description" className="form-control mb-2" 
                      onChange={(evt) => setDescription(evt.currentTarget.value)}></textarea>
          </div>

          <button
            type="button"
            className="btn btn-primary mb-2 me-2"
            onClick={() => {
              setSearchResults(
              [...searchResults, {make: make, model: model, year: year, description: description}]);
              
              setAllBoats([...allBoats, {make: make, model: model, year: year, description: description}]);
              setDuplicateResults([...duplicateResults, {make: make, model: model, year: year, description: description}]);              
            }
            }
          >
            Add Boat
          </button>
          <button
            type="button"
            className="btn btn-primary mb-2"
            onClick={() => setAddBoat(false)}
          >
            Cancel
          </button>
        </div>
      )}
      <div className="row">
        {searchResults.map((boat, index) => {
          return (
            <div key={index} className="col-lg-4 mb-2">
              
                
                {!editMode &&

<                   div key={index} className="card d-flex mb-3 h-100 shadow">

                    <img src={boat.url} className="card-img-top mb-1" alt="..."></img>

                      <div className="lead mb-1 ms-2">
                        <b>
                          {boat.year} {boat.make} {boat.model}
                        </b>
                      </div>
                      
                      <div className="mb-2 ms-2">
                        {boat.description}
                      </div>

                      <div className="mt-auto mb-2">
                        <button onClick={() => {setEditMode(true)}} className="btn btn-primary ms-2 mt-auto">Edit</button>
                      </div>
                    
                    </div>
              
                  
                }
                {editMode &&
                <div key={index} className="card d-flex mb-1 h-100 shadow" style={{ border: "black solid 1px" }}>
                  <form className="container">
                    <label htmlFor="year" className="form-label mt-2">Year</label>
                    <input type="text" name="year" className="form-control" value={boat.year} onChange={(evt) => setYear(evt.currentTarget.value)}></input>
                    <label htmlFor="make" className="form-label">Make</label>
                    <input type="text" name="make" className="form-control" value={boat.make} onChange={(evt) => setMake(evt.currentTarget.value)}></input>
                    <label htmlFor="model" className="form-label">Model</label>
                    <input type="text" name="model" className="form-control" value={boat.model} onChange={(evt) => setModel(evt.currentTarget.value)}></input>
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea name="description" className="form-control mb-2" value={boat.description} onChange={(evt) => setDescription(evt.currentTarget.value)}></textarea>
                    <button onClick={() => {return}} className="btn btn-primary me-2">Edit</button>
                    <button onClick={() => {setEditMode(false)}} className="btn btn-primary">Cancel</button>
                  </form>
                </div>
                }
                
              
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Boats;
