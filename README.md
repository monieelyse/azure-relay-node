# 🔁 Azure Relay Hybrid Connection with Node.js

This project demonstrates how to securely connect cloud or remote apps to on-premises services using **Azure Relay Hybrid Connections** and **Node.js**.

It includes:
- A **listener** (`listener.js`) that simulates an on-prem service
- A **sender** (`sender.js`) that connects to the service securely through Azure Relay

---

## 📦 Prerequisites

- [Node.js](https://nodejs.org/)
- [Azure account](https://portal.azure.com/)
- [Azure Developer CLI (azd)](https://learn.microsoft.com/en-us/azure/developer/azure-developer-cli/install-azd)
- An [Azure Relay Namespace](https://learn.microsoft.com/en-us/azure/azure-relay/relay-what-is-it)

---

## 🚀 How to Run

1. **Clone the repo**

```bash
git clone https://github.com/YOUR_USERNAME/azure-relay-node.git
cd azure-relay-node
npm install
