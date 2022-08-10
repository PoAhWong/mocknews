import axios from "axios";
import { useState, useEffect } from "react";
import { createTheme, colors, ThemeProvider } from "@mui/material";
import NavBar from "../navBars/NavBar";
const API_KEY = process.env.REACT_APP_API_KEY;

function Home() {
  const theme = createTheme({
    palette: {
      primary: {
        main: colors.grey[900],
      },
    },
  });
  const [topNews, setTopNews] = useState([]);
  const [search, setSearch] = useState();

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      setSearch(event.target.value);
    }
  };

  useEffect(() => {
    document.title = "MockNews";
    axios
      .get(
        `https://api.thenewsapi.com/v1/news/top?api_token=${API_KEY}&locale=us,au&limit=5`
      )
      .then((results) => {
        setTopNews(results.data.data);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <NavBar searchBar={false} />
      {!!topNews[0] && <Top1News news={topNews[0]} />}
    </ThemeProvider>
  );
}

export default Home;
