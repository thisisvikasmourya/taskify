import React from 'react'
import SearchAppBar from "@/components/SearchAppBar";
import Container from "@mui/material/Container";
const Users = () => {
  return (
    <div>
       <SearchAppBar />
       <Container sx={{ marginTop: "10px" }}>
        <h1>Dashboard1</h1>
        </Container>
    </div>
  )
}

export default Users
