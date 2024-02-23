# MDAPW3 Case Study: Land leasing
## Table of Contents
1. [Project Specification](#project-specification)
2. [Project Structrue](#project-Structrue)
3. [Development Environment Setup](#development-environment-setup)
    1. [Setting Up Eclipse IDE](#setting-up-eclipse-ide)
    2. [Installing Dependencies](#installing-dependencies)
4. [Setting Up The Project](#setting-up-the-project)
5. [How to Cite This Project](#how-to-cite-this-project)

## Project Specification 
This repository contains the models of MDAPW3 land leasing case study. models and codes that are included in this repository are automatically generated using MDAPW3 approach, which is an approach that we are developed based on OMG Model Driven Architecture (MDA) standard. you could find full implementaion model transformation and code generation algorithms in [https://github.com/SUTDSLab/MDAPW3](https://github.com/SUTDSLab/MDAPW3). you could also read our research paper in the following link:
- [TODO: link to our paper will be added here](./#)
## Project Structrue
- META-INF: icludes the project defitions and depedencies of the project
- model: include all of the transformed and generated models
    - land_leasing_choreography.bpmn : this is requiremnt model of case study, which conforms BPMN2.0 meta-model
    - land_leasing_cim.model : computationl independent model of the case study, which is the result of MDAPW3 BPMN to CIM transformation algorithm, and also conforms MDAPW3 CIM meta-model
    - land_leasing_pim.model : platform independent model of the case study, which is the result of MDAPW3 CIM to PIM transformation algorithm, and also conforms MDAPW3 PIM meta-model
    - land_leasing_psm.model : platform specific model of the case study, which is the result of MDAPW3 PIM to PSM transformation algorithm, and also conforms MDAPW3 PSM meta-model
    - codes: as stated in the paper, this directory includes the generated DApp code-base of the case study, which includes codes of smart contracts, client-side, build and configuration files 
- code: includes all of the generated codes
    - contracts : includes all of the generted smart contracts for this case study
    - dapp_ui : includes all of the client-side codes for DApp user interface
    - adapters : includes all adpaters codes which enable DApp UI to intract with third party systems or enable those systems to be able to intract with smart contracts of this DApp.
    - configs : includes all build and deployment configurations of land leasing DApp in YMAL and JSON formats
## Development Environment Setup

### Setting Up Eclipse IDE
TODO: IDE setup instructions will be added here
### Installing Dependencies
TODO: Dependencies installation instructions will be added here
## Setting Up The Project
TODO: Project setup instructions will be added here
## How to Cite This Project
TODO: paper citation record will be added here