import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import type { ItemType } from "types/item";

const Component: React.FC<ItemType> = ({
    email,
    first_name,
    gender,
    id,
    ip_address,
    last_name,
}) => {
    return (
        <Card
            sx={{
                maxWidth: 200,
                width: "100%",
                marginBottom: "0px",
                backgroundColor: "#E0FFFF",
                boxShadow: "0 0 300px 0 rgb(0 0 0 / 33%)",
            }}
        >
            <CardContent sx={{ padding: "15px" }}>
                <Typography
                    sx={{ fontSize: 16 }}
                    color="text.secondary"
                    gutterBottom
                >
                    {id}
                </Typography>
                <Typography variant="h5" component="div">
                    {first_name} {last_name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {gender}
                </Typography>
                <Typography variant="body2">
                    {email}
                    <br />
                    {ip_address}
                </Typography>
            </CardContent>
        </Card>
    );
};

export const Item = Component;
