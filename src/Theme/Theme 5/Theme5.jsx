import React, { useContext } from "react";
import { Box, Text, Heading, Grid, GridItem } from "@chakra-ui/react";
import "./theme5.css";
import ResumeContext from "../../Context/ResumeContext";

const Theme5 = (props) => {
  const { componentRef, themeData } = props;
  const { name, address, phone, email, profile, summary, skill } =
    themeData.personalData;

  const { checkProj, checkWork, checkAward } = useContext(ResumeContext);
  const { projectTitles, projectDesc } = themeData.projectData;
  const { educationTitles, educationDesc } = themeData.educationData;
  const { workTitles, workDesc } = themeData.workData;
  const { awards } = themeData.awardData;

  return (
    <Box id="section-to-print" ref={componentRef} className="theme5-container">
      <Box className="header-section">
        <Heading as="h2" size="2xl" className="name-heading">
          {name}
        </Heading>
        <Text className="profile-text">{profile}</Text>
        <Box className="contact-info">
          <Text>{address}</Text>
          <Text>{phone}</Text>
          <Text>{email}</Text>
        </Box>
      </Box>

      <div className="divider"></div>

      <Box className="content-section">
        <section className="section-item">
          <Heading as="h3" size="lg" className="section-title">
            Summary
          </Heading>
          <Text className="section-content">{summary}</Text>
        </section>

        {!checkWork && (
          <>
            <div className="divider"></div>
            <section className="section-item">
              <Heading as="h3" size="lg" className="section-title">
                Experience
              </Heading>
              <Text className="section-content">
                {Object.entries(workTitles).map((element, index) => {
                  return (
                    <Box key={index} className="experience-item">
                      <Heading as="h4" size="md" className="experience-title">
                        {element[1]}
                      </Heading>
                      <Text className="experience-desc">
                        {Object.entries(workDesc)[index]?.[1]?.split(",").map((desc, i) => (
                          <p key={i}>{desc}</p>
                        ))}
                      </Text>
                    </Box>
                  );
                })}
              </Text>
            </section>
          </>
        )}

        <div className="divider"></div>

        <section className="section-item">
          <Heading as="h3" size="lg" className="section-title">
            Education
          </Heading>
          <Text className="section-content">
            {Object.entries(educationTitles).map((element, index) => (
              <Box key={index} className="education-item">
                <Heading as="h4" size="md" className="education-title">
                  {element[1]}
                </Heading>
                <Text className="education-desc">
                  {Object.entries(educationDesc)[index]?.[1]?.split(",").map((desc, i) => (
                    <p key={i}>{desc}</p>
                  ))}
                </Text>
              </Box>
            ))}
          </Text>
        </section>

        {!checkProj && (
          <>
            <div className="divider"></div>
            <section className="section-item">
              <Heading as="h3" size="lg" className="section-title">
                Projects
              </Heading>
              <Text className="section-content">
                {Object.entries(projectTitles).map((element, index) => (
                  <Box key={index} className="project-item">
                    <Heading as="h4" size="md" className="project-title">
                      {element[1]}
                    </Heading>
                    <Text className="project-desc">
                      {Object.entries(projectDesc)[index]?.[1]?.split(",").map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </Text>
                  </Box>
                ))}
              </Text>
            </section>
          </>
        )}

        <div className="divider"></div>

        <section className="section-item">
          <Heading as="h3" size="lg" className="section-title">
            Skills
          </Heading>
          <Grid templateColumns="repeat(2, 1fr)" gap={5}>
            {skill.split(",").map((item, index) => (
              <GridItem key={index}>
                <Box className="skill-item">
                  <div className="bullet"></div>
                  <Text className="skill-text">{item}</Text>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </section>

        {!checkAward && (
          <>
            <div className="divider"></div>
            <section className="section-item">
              <Heading as="h3" size="lg" className="section-title">
                Achievements
              </Heading>
              <Grid templateColumns="repeat(2, 1fr)" gap={5}>
                {awards.split(",").map((item, index) => (
                  <GridItem key={index}>
                    <Box className="achievement-item">
                      <div className="bullet"></div>
                      <Text className="achievement-text">{item}</Text>
                    </Box>
                  </GridItem>
                ))}
              </Grid>
            </section>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Theme5;
