import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import department1 from "../assets/Images/departments-1.jpg";
import department2 from "../assets/Images/departments-2.jpg";
import department3 from "../assets/Images/departments-3.jpg";
import department4 from "../assets/Images/departments-4.jpg";
import department5 from "../assets/Images/departments-5.jpg";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <section id="Department" className="section">
        <div className="section-title">
          <h2>Departments</h2>
          <p>
            At Medilab, we offer a wide range of specialized medical services to
            meet the diverse healthcare needs of our patients. Our departments
            are staffed with highly qualified and experienced professionals
            dedicated to providing the highest standard of care.
          </p>
        </div>

        <Box
          sx={{
            flexGrow: 1,
            bgcolor: "background.paper",
            display: "flex",
            height: 300,
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: "divider" }}
          >
            <Tab label="Cardiology" {...a11yProps(0)} />
            <Tab label="Dermatology" {...a11yProps(1)} />
            <Tab label="Orthopedics" {...a11yProps(2)} />
            <Tab label="Pediatrics" {...a11yProps(3)} />
            <Tab label="Endocrinology" {...a11yProps(4)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <div className=" cardiology">
              <div className="left">
                <h1>Cardiology</h1>
                <p className="para">Heart disease prevention and management</p>
                <p>
                  Our cardiology department focuses on the prevention,
                  diagnosis, and treatment of heart conditions, providing
                  comprehensive cardiac care.
                </p>
              </div>
              <div className="right">
                <img className="img" src={department1} />
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="cardiology">
              <div className="left">
                <h1>Dermatology</h1>
                <p className="para">Skin cancer screening and treatment</p>
                <p>
                  Our dermatology department offers expert care for a wide range
                  of skin conditions, utilizing the latest treatments and
                  technologies.
                </p>
              </div>
              <div className="right">
                <img className="img" src={department2} />
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className=" cardiology">
              <div className="left">
                <h1>Orthopedics</h1>
                <p className="para">reatment of fractures and sprains</p>
                <p>
                  Our orthopedics department provides expert care for
                  musculoskeletal issues, helping patients regain mobility and
                  strength.
                </p>
              </div>
              <div className="right">
                <img className="img" src={department3} />
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <div className=" cardiology">
              <div className="left">
                <h1>Pediatrics</h1>
                <p>Well-child visits and immunizations</p>
                <p>
                  Our pediatric department provides compassionate and
                  comprehensive care for children from infancy through
                  adolescence, ensuring their healthy growth and development.
                </p>
              </div>
              <div className="right">
                <img className="img" src={department4} />
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <div className=" cardiology">
              <div className="left">
                <h1>Endocrinology</h1>
                <p className="para">Thyroid disorder treatment</p>
                <p>
                  Specializing in hormonal and metabolic disorders, our
                  endocrinology department offers comprehensive care for a
                  variety of conditions.
                </p>
              </div>
              <div className="right">
                <img className="img" src={department5} />
              </div>
            </div>
          </TabPanel>
        </Box>
      </section>
    </>
  );
}
