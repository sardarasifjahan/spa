import React from "react";
import "./Application.css";
import ApplicationLeft from "./ApplicationLeft";
import ApplicationRight from "./ApplicationRight";
function Application() {
  return (
    <div className="application">
      <h1>Application</h1>
      <div className="application__divider">
        <ApplicationLeft
          src="C:\Users\m1054096\Desktop\AmitReact\spa\src\Images\fenc.jpg"
          className="div__left"
        />
        <ApplicationRight
          className="div__right"
          textp="Drones are a significant asset in border security as they allow for
        real-time reconnaissance, target acquisition, track movement of people
        and illegal activities via high-quality video feed. Drones mounted with
        thermal detection cameras are much superior at tracking irregular
        activities such as illegal border crossing attempts through dense woods
        or mountainous terrain as compared to stationary video cameras"
          texth="Border Security"
        />
      </div>
      <div className="application__divider">
        <ApplicationRight
          className="div__right"
          textp="The applications of drones in railways include preparing contour maps of the area where new rail lines are proposed, 3D models of stations for visualization and 3D models of the terrain to draw accurate plans. GIS mapped data can be used to calculate the length of track laid and create 3D models to help project managers map potential risks to construction"
          texth="Railways"
        />
        <ApplicationLeft
          src="C:\Users\m1054096\Desktop\AmitReact\spa\src\Images\fenc.jpg"
          className="div__left"
        />
      </div>
      <div className="application__divider">
        <ApplicationLeft
          src="C:\Users\m1054096\Desktop\AmitReact\spa\src\Images\fenc.jpg"
          className="div__left"
        />
        <ApplicationRight
          className="div__right"
          textp="drones have a range of uses from soil and crop field analysis to planting and pesticide spraying. Drones can be used with different imaging technologies like hyperspectral, multispectral, thermal etc. that can provide the farmers with time and site-specific information regarding crop health, fungal infections, growth bottlenecks etc."
          texth="Agriculture"
        />
      </div>
      <div className="application__divider">
        <ApplicationRight
          className="div__right"
          textp="Aerial inspection by drones with thermal cameras capture in-depth infrared signatures and hot spots of defective panels which helps to detect anomalies and proactively address them to minimize maintenance cost and downtime. Drone inspections provide the capability to maximize output of solar farms in relatively less time and lower costs."
          texth="Solar Energy"
        />
        <ApplicationLeft
          src="C:\Users\m1054096\Desktop\AmitReact\spa\src\Images\fenc.jpg"
          className="div__left"
        />
      </div>
      <div className="application__divider">
        <ApplicationLeft
          src="C:\Users\m1054096\Desktop\AmitReact\spa\src\Images\fenc.jpg"
          className="div__left"
        />
        <ApplicationRight
          className="div__right"
          textp="Aerial drone-based wind turbine blade inspection is 60% times faster, 30% times cheaper and several times safer than traditional rope access or elevated platform inspections. Drone-based inspection with high-resolution camera, infra-red camera or other sensors provide detailed inspection of the blades, nacelle and the towers with clarity."
          texth="Wind Energy"
        />
      </div>
      <div className="application__divider">
        <ApplicationRight
          className="div__right"
          textp="In mining, drones have several applications like mine surveying, inventory management, stockpile estimation and hot spot detection etc. Mine surveying can be done using drones to provide detailed information about the sites before starting with mining projects and document their progress to visualize changes in site overtime."
          texth="Mining"
        />
        <ApplicationLeft
          src="C:\Users\m1054096\Desktop\AmitReact\spa\src\Images\fenc.jpg"
          className="div__left"
        />
      </div>
      <div className="application__divider">
        <ApplicationLeft
          src="C:\Users\m1054096\Desktop\AmitReact\spa\src\Images\fenc.jpg"
          className="div__left"
        />
        <ApplicationRight
          className="div__right"
          textp="In construction and real estate, drones have revolutionized surveying and mapping by making the process easier, simpler, less risky and exponentially less time-consuming. Drone technology can acquire high quality data in record time with the help of high-resolution camera payloads and related mapping solutions. With drones, construction sites can be regularly monitored and progress reports can be prepared with quick volumetric calculations and quality images."
          texth="Construction and Real Estate"
        />
      </div>
      <div className="application__divider">
        <ApplicationRight
          className="div__right"
          textp="Drone feeds can also help in the location of stranded and trapped survivors. This helps the disaster management team to efficiently plan rescue missions and use their resources effectively. In disaster management, drones can also assist in directing stranded people to safe locations and even drop first-aid medical supplies."
          texth="Disaster Management"
        />
        <ApplicationLeft
          src="C:\Users\m1054096\Desktop\AmitReact\spa\src\Images\fenc.jpg"
          className="div__left"
        />
      </div>
    </div>
  );
}

export default Application;
