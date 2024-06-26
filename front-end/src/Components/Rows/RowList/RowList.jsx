import React from "react";
import Row from "../Row/Row";
import requests from "../../../utils/requests";

const RowList = () => {
  return (
    <>
      <Row
        title="NEFLIX ORGINALS"
        fetchUrl={requests.fetchNetflixOrginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      {/* Additional */}
      <Row title="Animation Movies" fetchUrl={requests.fetchAnimation} />
      <Row
        title="Science Fiction Movies"
        fetchUrl={requests.fetchScienceFiction}
      />
      <Row title="Adventure Movies" fetchUrl={requests.fetchAdventure} />
      <Row title="History Movies" fetchUrl={requests.fetchHistory} />
      {/* Additional */}
      <Row title="TV Shows" fetchUrl={requests.fetchTVShow} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </>
  );
};

export default RowList;
