import React from "react";

import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Typography, Grid, Stack, Button } from "@mui/material";
let loadingGif = require("../study.gif");

function Home() {
    let navigate = useNavigate();
    return (
        <Grid container>
            <Grid item xs={5}>
                <Stack direction="column" spacing={2} alignItems="center" sx={{ py: 5, px: 2, width: 1, mt: 10 }}>
                    <Typography variant="h4">שוגי אתר החוגים הגדול בישראל</Typography>
                    <Typography variant="subtitle2">
                        אתר זה הוקם על ידי מורים פרטיים על מנת לענות על הפער הקיים במציאת חוגים פרטים באינטרנט.
                        כיום, האתר הינו לוח החוגים הגדול בישראל.
                        באתר ניתן למצוא מורים המעבירים חוגים פרטיים בכל המקצועות ובכל הארץ. לכל מורה יש פרופיל מפורט.
                        הוספת פרופיל מורה פרטי וחיפוש שיעור פרטי הינם בחינם.
                        נשמח לקבל תגובות ,הצעות לשיפור ותחומי לימוד חדשים.
                    </Typography>
                    <Button onClick={() => navigate("courses")} variant="contained" size="large" endIcon={<ArrowBackIcon />}>
                        מצא חוג עכשיו
                    </Button>
                </Stack>
            </Grid>
            <Grid item xs={7}>
                <img style={{ alignSelf: 'center' }} src={loadingGif} alt="wait until the page loads" />
            </Grid>
        </Grid>
    );
}
export default Home;