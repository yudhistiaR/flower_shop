import * as React from "react";
import { Card as MuiCard } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ShoppingCart } from "lucide-react";
import { formatCurrency } from "@/lib/formatCurrency";

export const Card = (props) => {
  return (
    <MuiCard sx={{ minWidth: "300px" }}>
      <CardMedia sx={{ height: 180 }} image={props.image} title={props.title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography
          variant="body2"
          component="div"
          sx={{ color: "text.secondary" }}
        >
          {props.description}
        </Typography>
        <Typography variant="p" component="div">
          Size : {props.size}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          href={`/shop/${props.id}`}
          fullWidth
          color="error"
          variant="contained"
        >
          {formatCurrency(props.price)}
        </Button>
        <Button fullWidth color="error" variant="contained">
          <ShoppingCart />
        </Button>
      </CardActions>
    </MuiCard>
  );
};
