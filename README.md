# MicroserviceOps Project

This project implements a complete DevOps pipeline for a microservices application. It includes:
- **Frontend**: Built with React.
- **Backend**: Implemented with Spring Boot.
- **Automation**: Using Ansible for infrastructure provisioning.
- **Orchestration**: Kubernetes for container management.
- **CI/CD**: Jenkins pipeline for continuous integration and deployment.

![MicroserviceOps Project arch](https://github.com/user-attachments/assets/0b93aa60-e3cc-4b2a-ab4b-faf4b6dfbf07)


## Table of Contents
- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Folder Structure](#folder-structure)
- [CI/CD Pipeline](#cicd-pipeline)
- [Kubernetes Deployment](#kubernetes-deployment)
- [Contributors](#contributors)

## Project Overview

This project covers the DevOps lifecycle for a microservices application. It involves:
- **Frontend**: React app to interact with users.
- **Backend**: Spring Boot for APIs and business logic.
- **Automation**: Using Ansible for infrastructure setup.
- **Containerization**: Docker and Kubernetes for container orchestration.
- **CI/CD Pipeline**: Jenkins for continuous integration and automated deployment.

## Prerequisites

You will need the following installed:
- **Docker**: For containerization.
- **Kubernetes**: For managing containers.
- **Jenkins**: For setting up CI/CD.
- **Ansible**: For infrastructure automation.
- **Node.js**: To run the React frontend.
- **Java**: To run the Spring Boot backend.
- **Git**: For version control.

## Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/shubhanand26/MicroserviceOpsProject
   cd MicroserviceOpsProject
   ```

2. **Set up frontend**:
   Navigate to the frontend folder and install dependencies:
   ```bash
   cd react-frontend
   npm install
   ```

3. **Set up backend**:
   Navigate to the backend and build the application:
   ```bash
   cd ../springboot-backend
   ./mvnw clean install
   ```

4. **Provision infrastructure with Ansible**:
   Navigate to the Ansible folder and run the playbook:
   ```bash
   cd ../ansible
   ansible-playbook site.yml
   ```

## Folder Structure

- **Jenkinsfile**: Defines CI/CD pipeline steps.
- **ansible/**: Ansible playbooks for automated provisioning.
- **kubernetes/**: Kubernetes manifests for deploying the application.
- **react-frontend/**: React code for the frontend.
- **springboot-backend/**: Spring Boot code for the backend.
- **test/**: Contains test scripts and configurations.

## CI/CD Pipeline

The Jenkins pipeline performs the following tasks:
- **Build**: Compiles and packages the Spring Boot application.
- **Test**: Runs unit tests for both backend and frontend.
- **Deploy**: Pushes Docker images to a container registry and deploys them to Kubernetes.

## Kubernetes Deployment

To deploy the application using Kubernetes:
1. Ensure your Kubernetes cluster is up and running.
2. Apply Kubernetes manifests:
   ```bash
   cd kubernetes
   kubectl apply -f deployment.yaml
   ```

## Contributors

- **Shubh Anand**.

---
