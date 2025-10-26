
// import { ThemeContext } from '@emotion/react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Navbar } from './Componentsss/Navbar';
import { Footer } from './Componentsss/Footer';
import { RouterComponent } from './RouterComponent';
import { BrowserRouter, data, Routes } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';
import { RouterLoginn } from './Componentsss/Login';
import { useContext, useState } from 'react';
import { AuthContext } from './AuthContext';
import { routerpath } from './Routerpath';
import { Route } from 'react-router-dom';



function App() {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [title, setTitle] = useState("");
  const user = useContext(AuthContext);
  console.log({ user });
  return (

    <ThemeContext>
      <BrowserRouter>
        <Navbar title={title} setTitle={setTitle} setFilteredData={setFilteredData} />
        {/* {user?.user?.email && <Navbar/>} */}
        {/* <Typography>sample project</Typography>
    {/* <Button variant='text'  >click me </Button> <br></br> 
    <Button disabled = {true}  variant='outlined'  >sudmit</Button> <br></br>
    <Button  variant='contained'>login</Button><br></br> */}
        <Routes>
          {routerpath.map((route, index) => {
            const Component = route.component;

            return (
              <Route
                Key={index}
                path={route.path}
                element={
                  <Component
                    search={search}
                    setSearch={setSearch}
                    filteredData={filteredData}
                    setFilteredData={setFilteredData}
                    title={search}
                    setTitle={setTitle} />
                } />
            )
          })}
        </Routes>
        {/* <RouterComponent  /> */}
        {/* <RouterLoginn/> */}
        <Footer />
      </BrowserRouter>
    </ThemeContext>

  )
}

export default App
