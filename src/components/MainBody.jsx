import { Box } from "@mui/material";
import React from "react";
import {
    Container,
    Grid
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import NFTCard from "./NFTCard";
import TmpData from "../data/tmpdata.json";

export default function (){
  return(
    <Box>
      <Container fixed sx={{padding : "40px 0", height : "100%"}}>
        <Grid container spacing={3}>
          {
            TmpData.map((nft, index) => {
              return(
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <NFTCard nft={nft} />
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
    </Box>
  )
}