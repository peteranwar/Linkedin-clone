import NewReleasesIcon from "@material-ui/icons/NewReleases";
import LaunchIcon from "@material-ui/icons/Launch";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";
import "./style.scss";

const index = () => {
  const mostCourses = (heading, desc) => (
    <div className="courses">
      <div>
        <h4>{heading}</h4>
        <p>{desc}</p>
      </div>
      <LaunchIcon fontSize="small" className="icon" />
    </div>
  );

  return (
    <div className="widgets-container">
      <div className="header">
        <h2>Today’s most viewed courses</h2>
        <NewReleasesIcon fontSize="small" />
      </div>
      {mostCourses(
        "1. Learning React.js",
        "Learn how to develop user interfaces using React.js."
      )}
      {mostCourses(
        "2. Learning Full-Stack JavaScript",
        "Learn by doing! Learn full-stack JavaScript development."
      )}
      {mostCourses(
        "3. Agile Foundations",
        "Learn the foundational concepts ypu neet to konw start thinking like an agile team."
      )}
      <div className="show-more">
        <p>
          Show more on LinkedIn Learning
          <TrendingFlatIcon className="icon" />
        </p>
      </div>
    </div>
  );
};

export default index;
