import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import TripList from "../components/TripList";
import "./HomePage.css";
import axios from "axios";

function HomePage() {
  const [trips, setTrips] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");


  async function getData(value) {
    try {
      const encodedValue = encodeURIComponent(value);
      const response = await axios.get(
        `http://localhost:4001/trips?keywords=${encodedValue}`
      );
      setTrips(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(function () {
    getData(searchKeyword);
  }, [searchKeyword]);

  function handleTagClick(tag) {
    setSearchKeyword(tag);
  }

  return (
    <main className="home-page">
      <div className="home-page__container">
        <header className="home-page__header">
          <h1 className="home-page__title">เที่ยวไหนดี</h1>
          <SearchBar value={searchKeyword} onChange={setSearchKeyword} />
        </header>

        <TripList
          trips={trips}
          onTagClick={handleTagClick}
        />
      </div>
    </main>
  );
}

export default HomePage;
