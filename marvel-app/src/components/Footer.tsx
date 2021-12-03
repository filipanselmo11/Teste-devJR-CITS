import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export default function Footer() {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6">Desenvolvido por Fílip Anselmo</Typography>
            </Toolbar>
        </AppBar>
    );

}
