import React from "react";

import { Typography, Grid, Stack, Paper, TextField } from "@mui/material";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { TabScrollButton } from '@mui/material';
const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));
function Information() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <Grid >
            <Stack direction="column" spacing={2} alignItems="right" sx={{ py: 0, px: 2, width: 1, mt: 1 }}>
                <Typography variant="h6" > מי אנחנו?</Typography>
                <Typography variant="subtitle2">
                    אתר שוגי הוקם בשנת 2022 במסגרת לימודי תואר ראשון להנדסת תוכנה של שירה דורון ואביטל גולדמן. השאיפה הייתה להקים את המאגר הגדול ביותר בישראל של חוגים, מכל קצוות הארץ, כך שכל ילד בישראל והוריו יוכלו להיכנס לאתר ולבחור את החוג שמתאים לילד, את המחיר המתאים לו, את המורה המתאים לו ואת צורת הלימוד המתאימה לו. אתר שוגי מכיל כיום מאגר אדיר של סוגי חוגים שונים, מחוגי ספורט ועד חוגי אומנות, ספרות, תיאטרון והרשימה ארוכה מאוד. האתר מאפשר גם לכל מורה בישראל להציע את שירותיו בצורה הכי טובה והכי רווחית לקהל הרחב.
                </Typography>
                <Typography variant="h6" >  שאלות ותשובות </Typography>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography>איך יוצרים קשר עם המורה? </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            על ידי לחיצה על מספר הטלפון שלו.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <Typography>	איך יוצרים קשר עם התלמיד? </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            על ידי לחיצה על מספר הטלפון שלו.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography>האם אפשר לבטל רישום של קורס במידה ואני לא מעוניין ?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            כן ניתן לבטל רישום עד 30 יום.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography>האם אפשר לקבוע שיעורים עם המורה שלא דרך האתר? </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            לא ניתן לרבוע שיעורים עם המורה שלא דרך האתר.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Stack>
            <Grid>
                <Typography sx={{ textAlign: 'center', mx: 50 }}>
                    <MailOutlineIcon fontSize="large" />
                    shugi@gmail.com
                    <InstagramIcon fontSize="large" />
                    <FacebookIcon fontSize="large" />
                </Typography>

            </Grid>
        </Grid>
    )
}
export default Information;