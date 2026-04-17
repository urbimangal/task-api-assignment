# Task API Assignment

## Overview
For this assignment, I worked on an existing Node.js API codebase. I went through the code to understand how it works, identified a few issues, and implemented a new feature along with test cases.

---

## What I Implemented
- Added `PATCH /tasks/:id/assign` endpoint to assign a task to a user
- Included basic validation for `userId`
- Handled cases like:
  - Task not found
  - Missing or invalid userId

---

## Bugs Identified

### 1. Pagination Issue
- File: `taskService.js`
- Problem: Offset calculation was incorrect
- Fix: Changed it to `(page - 1) * limit`

### 2. Status Filtering
- File: `taskService.js`
- Problem: Used `.includes()` which could give incorrect results
- Note: This should ideally be an exact match

### 3. Priority Reset on Completion
- File: `taskService.js`
- Problem: Completing a task resets priority to "medium"
- Note: This may not be expected behavior

---

## Testing
- Wrote test cases using Jest and Supertest
- Covered:
  - Task creation
  - Task assignment flow (create → assign)

---

## Tech Stack
- Node.js
- Express.js
- Jest
- Supertest

---

## How to Run

```bash
npm install
npm start
npm test
