import { useEffect, useState } from "react";

import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import { Navbar } from "../../components/navbar/Navbar";
import "./home.scss";
import API from "../../api";

export default function Home({ type }) {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const { data } = await API.get(
          `/lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzQ4NDFlYThhOWJiYzJmYzRkZjEyZCIsImFkbWluIjpmYWxzZSwiaWF0IjoxNjQ3NjA4OTU2LCJleHAiOjE2NDgwNDA5NTZ9.1CcX93i6Q2EBCFpXdBrOY-RdYwdOJJGb2uIGhCJNGJs",
            },
          }
        );
        setLists(data);
      } catch (error) {
        console.log(error);
      }
    };

    getRandomLists();
  }, [genre, type]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
}
