To-Do Tracking App

This project is a lightweight, full-stack to-do tracking application designed to help manage daily tasks and goals. It was built primarily as a personal tool and a learning project for working with React, Python, containerization, and a small Kubernetes cluster.

Features

Create, view, and manage daily tasks/goals

Lightweight UI built for quick interaction

Accessible from any device on your Tailnet (desktop, laptop, mobile)

Tech Stack
Frontend

React for building the UI

Tailwind CSS for fast, utility-based styling

Backend

Python (simple API server)

Provides endpoints for managing tasks

Designed to stay minimal and easy to modify

Infrastructure

Kubernetes cluster running on two Raspberry Pis

Docker images for frontend and backend stored in a private GHCR repository

Tailscale used to securely expose the app across devices

Both Kubernetes nodes are connected to the Tailnet

The app is reachable anywhere (including mobile devices on 5G) via Tailscale Serve

Deployment Overview

The application is deployed as separate frontend and backend services inside the Raspberry Pi Kubernetes cluster. The images are pulled from GHCR using Kubernetes imagePullSecrets. Tailscale is installed on both nodes to provide secure networking and easy access without needing public ingress or port-forwarding.

This setup provides:

Encrypted access to the app across personal devices

A simple self-hosted environment for experimentation
