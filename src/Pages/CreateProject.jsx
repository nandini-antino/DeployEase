import React, { useState } from "react";
import "./CreateProject.scss";

const CreateProject = () => {
  // Define state variables for project name, project type, deployment, tech stack, environment, and product type
  const [projectName, setProjectName] = useState("");
  const [projectType, setProjectType] = useState("Monolithics");
  const [deployment, setDeployment] = useState("Backend");
  const [techStack, setTechStack] = useState("Nodejs");
  const [environment, setEnvironment] = useState("Test");
  const [productType, setProductType] = useState("Basic");

  // State variables for checkboxes
  const [webApp, setWebApp] = useState(false);
  const [frontendWebApp, setFrontendWebApp] = useState(false);
  const [adminPanel, setAdminPanel] = useState(false);
  const [adminPanelFE, setAdminPanelFE] = useState(false);
  const [driverApp, setDriverApp] = useState(false);

  // Event handlers for checkbox changes
  const handleWebAppChange = () => {
    setWebApp(!webApp);
  };

  const handleFrontendWebAppChange = () => {
    setFrontendWebApp(!frontendWebApp);
  };

  const handleAdminPanelChange = () => {
    setAdminPanel(!adminPanel);
  };

  const handleAdminPanelFEChange = () => {
    setAdminPanelFE(!adminPanelFE);
  };

  const handleDriverAppChange = () => {
    setDriverApp(!driverApp);
  };

  // Event handler for input changes
  const handleProjectNameChange = (event) => {
    setProjectName(event.target.value);
  };

  // Event handler for project type dropdown changes
  const handleProjectTypeChange = (event) => {
    setProjectType(event.target.value);
  };

  // Event handler for deployment dropdown changes
  const handleDeploymentChange = (event) => {
    setDeployment(event.target.value);
  };

  // Event handler for tech stack dropdown changes
  const handleTechStackChange = (event) => {
    setTechStack(event.target.value);
  };

  // Event handler for environment dropdown changes
  const handleEnvironmentChange = (event) => {
    setEnvironment(event.target.value);
  };

  // Event handler for product type dropdown changes
  const handleProductTypeChange = (event) => {
    setProductType(event.target.value);
  };

  // Event handler for the "Create Project" button click
  const handleCreateProjectClick = () => {
    // You can perform any desired actions when the button is clicked
    // For example, you can send the project details to a server or perform local actions.
    // For this example, we'll just log the project details to the console.
    console.log("Project Name:", projectName);
    console.log("Project Type:", projectType);
    console.log("Deployment:", deployment);
    console.log("Tech Stack:", techStack);
    console.log("Environment:", environment);
    console.log("Product Type:", productType);
    console.log("Web App:", webApp);
    console.log("Frontend Web App:", frontendWebApp);
    console.log("Admin Panel:", adminPanel);
    console.log("Admin Panel FE:", adminPanelFE);
    console.log("Driver App:", driverApp);
  };

  return (
    <div className="center-container">
      <h1>Create Project</h1>
      <div className="form-item">
        <label htmlFor="projectName">Enter project name:</label>
        <input
          type="text"
          id="projectName"
          value={projectName}
          onChange={handleProjectNameChange}
        />
      </div>
      <div className="form-item">
        <label htmlFor="projectType">Project Type:</label>
        <select
          id="projectType"
          value={projectType}
          onChange={handleProjectTypeChange}
        >
          <option value="Monolithics">Monolithics</option>
          <option value="Micro-Service">Micro-Service</option>
        </select>
      </div>
      <div>
        <label htmlFor="deployment">Deployment:</label>
        <select
          id="deployment"
          value={deployment}
          onChange={handleDeploymentChange}
        >
          <option value="Backend">Backend</option>
          <option value="Frontend">Frontend</option>
        </select>
      </div>
      <div>
        <label htmlFor="techStack">Tech Stack:</label>
        <select
          id="techStack"
          value={techStack}
          onChange={handleTechStackChange}
        >
          <option value="Nodejs">Node.js</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
          <option value="Reactjs">React.js</option>
          <option value="Angular">Angular</option>
          <option value=".net">.NET</option>
        </select>
      </div>
      <div>
        <label htmlFor="environment">Environment:</label>
        <select
          id="environment"
          value={environment}
          onChange={handleEnvironmentChange}
        >
          <option value="Test">Test</option>
          <option value="Pre Prod">Pre Prod</option>
          <option value="Production">Production</option>
        </select>
      </div>
      <div>
        <label htmlFor="productType">Product Type:</label>
        <select
          id="productType"
          value={productType}
          onChange={handleProductTypeChange}
        >
          <option value="Basic">Basic</option>
        </select>
      </div>
      <div className="checkbox-section">
        <label>Choose features:</label>
        <div className="checkbox-item">
          <input
            type="checkbox"
            id="webApp"
            name="webApp"
            checked={webApp}
            onChange={handleWebAppChange}
          />
          <label htmlFor="webApp">Web App</label>
        </div>
        <div className="checkbox-item">
          <input
            type="checkbox"
            id="frontendWebApp"
            name="frontendWebApp"
            checked={frontendWebApp}
            onChange={handleFrontendWebAppChange}
          />
          <label htmlFor="frontendWebApp">Frontend Web App</label>
        </div>
        <div className="checkbox-item">
          <input
            type="checkbox"
            id="adminPanel"
            name="adminPanel"
            checked={adminPanel}
            onChange={handleAdminPanelChange}
          />
          <label htmlFor="adminPanel">Admin Panel</label>
        </div>
        <div className="checkbox-item">
          <input
            type="checkbox"
            id="adminPanelFE"
            name="adminPanelFE"
            checked={adminPanelFE}
            onChange={handleAdminPanelFEChange}
          />
          <label htmlFor="adminPanelFE">Admin Panel FE</label>
        </div>
        <div className="checkbox-item">
          <input
            type="checkbox"
            id="driverApp"
            name="driverApp"
            checked={driverApp}
            onChange={handleDriverAppChange}
          />
          <label htmlFor="driverApp">Driver App</label>
        </div>
      </div>
      <button onClick={handleCreateProjectClick}>Create Project</button>
    </div>
  );
};

export default CreateProject;
