# NOAH AI Visual Scanner

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react\&logoColor=white)](https://react.dev/)

**See it. Scan it.**

NOAH AI Visual Scanner is a browser-based OCR tool that turns images and handwritten notes into editable digital text.

Images are processed directly in the browser using Tesseract.js and optional TensorFlow.js support. The application does not require a backend or OCR API key.

## Contents

* [Overview](#overview)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Architecture](#architecture)
* [Getting Started](#getting-started)
* [Usage](#usage)
* [Testing](#testing)
* [Project Structure](#project-structure)
* [Known Limitations](#known-limitations)
* [License](#license)

## Overview

NOAH AI Visual Scanner is designed for quickly turning image-based text into editable content.

The application supports image upload and drag-and-drop workflows, previews the selected image, runs OCR in the browser, and presents the recognized text in an editable result box.

Recognized results can be copied, downloaded as text, and stored in browser history for later access.

## Features

* **Image upload** — Select an image from your device.
* **Drag & drop** — Drop supported images directly into the scanner.
* **Image preview** — Review the selected image before running OCR.
* **OCR processing** — Recognize text using Tesseract.js in the browser.
* **Handwritten text recognition** — Designed to process handwritten notes and other image-based text.
* **Confidence score** — View the recognition confidence returned by the OCR pipeline.
* **Editable results** — Correct or modify recognized text directly.
* **Copy text** — Copy OCR output to the clipboard.
* **Download text** — Save recognized text as a `.txt` file.
* **History** — Keep recent OCR results in browser `localStorage`.
* **Optional custom model** — Support for an optional TensorFlow.js model through `public/models/model.json`.

## Tech Stack

| Layer              | Technology                             |
| ------------------ | -------------------------------------- |
| UI                 | React 18 + TypeScript                  |
| Routing            | React Router                           |
| Styling            | Tailwind CSS                           |
| OCR                | Tesseract.js                           |
| Optional inference | TensorFlow.js                          |
| Build tooling      | Vite                                   |
| Icons              | lucide-react                           |
| Testing            | Vitest + React Testing Library + jsdom |

There is no dedicated backend required for the OCR workflow. Recognition runs in the user's browser.

## Architecture

```text
                    ┌────────────────────────┐
                    │       Landing Page      │
                    │            /            │
                    └────────────┬───────────┘
                                 │
                                 ▼
                    ┌────────────────────────┐
                    │      NOAH Scanner       │
                    │           /app          │
                    └────────────┬───────────┘
                                 │
                    Upload / Drag & Drop
                                 │
                                 ▼
                    ┌────────────────────────┐
                    │   File Validation       │
                    │ type / size checks      │
                    └────────────┬───────────┘
                                 │
                                 ▼
                    ┌────────────────────────┐
                    │     ModelService        │
                    │  Tesseract.js OCR       │
                    │  optional TF.js model   │
                    └────────────┬───────────┘
                                 │
                                 ▼
                    ┌────────────────────────┐
                    │     OCR Result          │
                    │ editable / copy / save  │
                    └──

Future roadmap

Dashboard

Account overview
Scan history and searchable documents
Usage/scan counters
Recent activity
Saved OCR documents
Account/settings area
Scanner and Camera access from the dashboard
Clean NOAH light-brown + green theme

Proper billing

✅ Stripe Checkout
⚠️ Monthly/annual subscriptions
✅ Free plan with defined usage limits
✅ Paid tiers and entitlements
✅ Stripe webhook handling
✅ Subscription status stored server-side
⚠️ Upgrade/downgrade/cancel flow
❌ Billing portal
❌ Payment history/invoices
⚠️ Protection against users bypassing client-side limits

Architecture

NOAH UI
   ↓
Dashboard
   ↓
Auth / User Account
   ↓
Usage + Subscription Entitlements
   ↓
Stripe
   ↓
Webhook → Server Database
```
