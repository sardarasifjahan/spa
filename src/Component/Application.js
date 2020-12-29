import React from "react";
import ApplicationList from "./ApplicationList";
import pic from "../Images/fenc.jpg";
import railways from "../Images/railways.jpg";
import Solar from "../Images/Solar.jpg";
import real from "../Images/real.jpg";
import wind from "../Images/windmills.jpg";
import agriculture from "../Images/agriculture.jpg";
import minning from "../Images/minning.jpg";
import dm from "../Images/dm.jpg";
function Application() {
  return (
    <div className="application">
      <div className="app_center">
        <h1>Application</h1>
      </div>
      <ApplicationList
        src={pic}
        ptext="Drones are a significant asset in border security as they allow for
          real-time reconnaissance, target acquisition, track movement of people
          and illegal activities via high-quality video feed. Drones mounted
          with thermal detection cameras are much superior at tracking irregular
          activities such as illegal border crossing attempts through dense
          woods or mountainous terrain as compared to stationary video cameras"
        htext="Border Security"
      />
      <ApplicationList
        src={Solar}
        ptext="Aerial inspection by drones with thermal cameras capture in-depth infrared signatures and hot spots of defective panels which helps to detect anomalies and proactively address them to minimize maintenance cost and downtime. Drone inspections provide the capability to maximize output of solar farms in relatively less time and lower costs."
        htext="Solar Energy"
      />
      <ApplicationList
        src={agriculture}
        ptext="drones have a range of uses from soil and crop field analysis to planting and pesticide spraying. Drones can be used with different imaging technologies like hyperspectral, multispectral, thermal etc. that can provide the farmers with time and site-specific information regarding crop health, fungal infections, growth bottlenecks etc."
        htext="Agriculture"
      />
      <ApplicationList
        src={railways}
        ptext="The applications of drones in railways include preparing contour maps of the area where new rail lines are proposed, 3D models of stations for visualization and 3D models of the terrain to draw accurate plans. GIS mapped data can be used to calculate the length of track laid and create 3D models to help project managers map potential risks to construction"
        htext="Railways"
      />
      <ApplicationList
        src={wind}
        ptext="Aerial drone-based wind turbine blade inspection is 60% times faster, 30% times cheaper and several times safer than traditional rope access or elevated platform inspections. Drone-based inspection with high-resolution camera, infra-red camera or other sensors provide detailed inspection of the blades, nacelle and the towers with clarity."
        htext="Wind Energy"
      />
      <ApplicationList
        src={minning}
        ptext="In mining, drones have several applications like mine surveying, inventory management, stockpile estimation and hot spot detection etc. Mine surveying can be done using drones to provide detailed information about the sites before starting with mining projects and document their progress to visualize changes in site overtime."
        htext="Mining"
      />
      <ApplicationList
        src={real}
        ptext="In construction and real estate, drones have revolutionized surveying and mapping by making the process easier, simpler, less risky and exponentially less time-consuming. Drone technology can acquire high quality data in record time with the help of high-resolution camera payloads and related mapping solutions. With drones, construction sites can be regularly monitored and progress reports can be prepared with quick volumetric calculations and quality images."
        htext="Construction and Real Estate"
      />
      <ApplicationList
        src={dm}
        ptext="Drone feeds can also help in the location of stranded and trapped survivors. This helps the disaster management team to efficiently plan rescue missions and use their resources effectively. In disaster management, drones can also assist in directing stranded people to safe locations and even drop first-aid medical supplies."
        htext="Disaster Management"
      />
    </div>
  );
}

export default Application;
