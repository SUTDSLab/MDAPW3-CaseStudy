# MDAPW3 Case Study: Land leasing
## Table of Contents
1. [Project Specification](#project-specification)
2. [Project Structure](#project-structure)
3. [Development Environment Setup](#development-environment-setup)
    1. [Setting Up Eclipse IDE](#setting-up-eclipse-ide)
    2. [Installing Dependencies](#installing-dependencies)
4. [Setting Up The Project](#setting-up-the-project)
5. [How to Cite This Project](#how-to-cite-this-project)

## Project Specification 
The artifacts of Land Leasing case study generated using the MDAPW3 approach[https://github.com/SUTDSLab/MDAPW3](https://github.com/SUTDSLab/MDAPW3) are presented here. 

## Project Structure
- META-INF: includes the project definitions and dependencies of the project
- model: include all of the transformed and generated models
    - land_leasing_choreography.bpmn : this is requirement model of case study, which conforms BPMN2.0 meta-model
    - land_leasing_cim.model : computational independent model of the case study, which is the result of MDAPW3 BPMN to CIM transformation algorithm, and also conforms MDAPW3 CIM meta-model
    - land_leasing_pim.model : platform independent model of the case study, which is the result of MDAPW3 CIM to PIM transformation algorithm, and also conforms MDAPW3 PIM meta-model
    - land_leasing_psm.model : platform specific model of the case study, which is the result of MDAPW3 PIM to PSM transformation algorithm, and also conforms MDAPW3 PSM meta-model
    - codes: as stated in the paper, this directory includes the generated DApp code-base of the case study, which includes codes of smart contracts, client-side, build and configuration files 
- code: includes all of the generated codes
    - contracts : includes all of the generated smart contracts for this case study
    - dapp_ui : includes all of the client-side codes for DApp user interface
    - adapters : includes all adapters codes which enable DApp UI to interact with third party systems or enable those systems to be able to interact with smart contracts of this DApp.
    - configs : includes all build and deployment configurations of land leasing DApp in YMAL and JSON formats
## Development Environment Setup

### Setting Up Eclipse IDE
You could use any version of Eclipse IDE with proper plugins, but for quick launch and ready to use develop environment, we suggest to use Eclipse Epsilon version. follow the below official instructions to install it:
[Installing Eclipse Epsilon](https://eclipse.dev/epsilon/download/)
### Installing Dependencies
If you prefer to use regular version of the Eclipse, you could install Epsilon as an extension by the following the below instructions:
[Installing Epsilon using Eclipse Marketplace](https://eclipse.dev/epsilon/download/#eclipse-marketplace)
## Setting Up The Project
1. Clone the git repository
```
git clone https://github.com/SUTDSLab/MDAPW3-CaseStudy.git
``` 
2. Import the repository as a project in Eclipse
File > Import > Existing Project into Workspace > Select the root directory > Finish

3. To run the project follow the below instructions:
    1. Register any Ecore metamodels in it
    2. Right click the .launch file in it
    3. Select Run as... and click the first item in the menu that pops up

## How to Cite This Project
TODO: paper citation record will be added here