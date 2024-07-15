import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <section className="faq">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>
            Welcome to the Medilab FAQ section! Here, we have compiled answers
            to some of the most common questions our patients have. If you dont
            find the answer you are looking for, please dont hesitate to contact
            us directly.
          </p>
        </div>
        <div className="accordion">
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "8%", flexShrink: 0 }}>
                <i className="bi bi-question-circle"></i>
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Where is your clinic located?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Our clinic is located at [Clinic Address], conveniently
                accessible via public transportation and with ample parking
                available.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: "8%", flexShrink: 0 }}>
                <i className="bi bi-question-circle"></i>
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                What should I bring to my appointment?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Please bring a valid ID, your insurance card, any relevant
                medical records, a list of your current medications, and any
                specific documents requested by our staff.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: "8%", flexShrink: 0 }}>
                <i className="bi bi-question-circle"></i>
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                What services do you offer?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We offer a wide range of medical services including general
                check-ups, specialist consultations, vaccinations, diagnostic
                tests, minor surgeries, and wellness programs. For a detailed
                list of services, please visit our [Services Page].
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: "8%", flexShrink: 0 }}>
                <i className="bi bi-question-circle"></i>
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                What should I do in case of a medical emergency?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                In case of a medical emergency, please call 911 or go to the
                nearest emergency room immediately. For urgent but
                non-life-threatening situations, contact our office for advice.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: "8%", flexShrink: 0 }}>
                <i className="bi bi-question-circle"></i>
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                What payment methods do you accept?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We accept cash, credit/debit cards, and checks. For your
                convenience, we also offer online payment options through our
                patient portal.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </section>
    </>
  );
}
