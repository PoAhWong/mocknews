import axios from "axios";
import { useState, useEffect } from "react";
import { createTheme, colors, ThemeProvider } from "@mui/material";
import NavBar from "../navBars/NavBar";
import CategoryBar from "../navBars/CategoryBar";
import Main from "../body/Main";
import { useParams } from "react-router-dom";

const API_KEY = process.env.REACT_APP_API_KEY;

function NewsPage() {
  const theme = createTheme({
    palette: {
      primary: {
        main: colors.grey[900],
      },
    },
  });
  const [topNews, setTopNews] = useState([]);
  let { category } = useParams();
  const [search, setSearch] = useState();

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      setSearch(event.target.value);
    }
  };

  useEffect(() => {
    let categoriesQuery = !!category ? `&categories=${category}` : "";
    let searchQuery = !!search ? `&search=${search}` : "";
    axios
      .get(
        `https://api.thenewsapi.com/v1/news/top?api_token=${API_KEY}&locale=us,au${categoriesQuery}${searchQuery}&limit=5`
      )
      .then((results) => {
        setTopNews(results.data.data);
      })
      .then(setSearch(""));
  }, [category, search]);

  return (
    <ThemeProvider theme={theme}>
      <NavBar handleSearch={handleSearch} searchBar={true} />
      <CategoryBar selectedCategory={category} />
      <Main news={topNews} selectedCategory={category} />
    </ThemeProvider>
  );
}

export default NewsPage;
