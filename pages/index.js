import Head from "next/head";
import Nav from "../components/Navbar/navbar";
import Header from "../components/Header/header";
import Trusted from "../components/Trusted/Trusted";
import styled from "styled-components";

const MainHeader = styled.div`
  font-family: "Inter", sans-serif;
  background-color: #041553;
  color: white;
`;

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHeader>
        <Nav />
        <Header />
        <Trusted />
      </MainHeader>
    </div>
  );
};

export default Home;
