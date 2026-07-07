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
      const response = await axios.get(
        `http://localhost:4001/trips?keywords=${value}`
      );
      setTrips(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

useEffect(()=> {getData(searchKeyword)}, [searchKeyword])

  function handleReadMore(eid) {
    console.log("อ่านต่อ:", eid);
    // ตรงนี้ค่อยเพิ่ม navigate ไปหน้ารายละเอียด (เรียน React Router เพิ่มแล้วค่อยทำ)
  }

  function handleTagClick(tag) {
    setSearchKeyword(tag);
    // ตรงนี้ค่อยเพิ่ม fetch ข้อมูลด้วย tag แล้วใช้ setTrips(...)
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
          onReadMore={handleReadMore}
          onTagClick={handleTagClick}
        />
      </div>
    </main>
  );
}

export default HomePage;
